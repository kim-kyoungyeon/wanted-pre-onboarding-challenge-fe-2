import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  Categories,
  categoryState,
  customCategoriesState,
  toDoSelector,
  toDoState,
} from './atoms';
import styled from 'styled-components';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';
import CreateCategory from './CreateCategory';

const ToDoContainer = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 100vh;
  padding: 20 40;
`;
const Header = styled.div`
  borer: solid red;
`;
const ToDoBtn = styled.button`
  background-color: ${(prop) => prop.theme.bgColor};
  color: ${(prop) => prop.theme.textColor};
  box-shadow: ${(prop) => prop.theme.inputStyle};
  border-radius: 5px;
  padding: 10px;
  border: none;
  &:hover {
    box-shadow: ${(prop) => prop.theme.clickedStyle};
  }
`;
const CategoryContainer = styled.div`
  border: 1px green;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 5px;
  margin-bottom: 15px;
  select {
    width: 70%;
    background-color: ${(prop) => prop.theme.whiteColor};
    border: none;
    box-shadow: ${(prop) => prop.theme.inputStyle};
    border-radius: 10px;
    padding: 10px;
    margin: 5px 0px 10px 0px;
  }
`;

function ToDoList() {
  const [toDo, setToDo] = useRecoilState(toDoState);
  const [category, setCategory] = useRecoilState(categoryState);
  const toDos = useRecoilValue(toDoSelector);
  const [customCategories, setCustomCategories] = useRecoilState(
    customCategoriesState
  );

  const onInput = (event: React.FocusEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  const onDelelteAllClick = (e: React.FormEvent<HTMLButtonElement>) => {
    setToDo([]);
    setCustomCategories([]);
  };

  useEffect(() => {
    localStorage.setItem('toDos', JSON.stringify(toDo));
  }, [toDo]);

  useEffect(() => {
    localStorage.setItem('CATEGORIES_KEY', JSON.stringify(customCategories));
  }, [customCategories]);

  console.log(category);

  return (
    <ToDoContainer>
      <Header>
        <h1> ToDOs</h1>
        <h2> Choose category</h2>
        <CategoryContainer>
          <select value={category} onInput={onInput}>
            <option></option>
          </select>
        </CategoryContainer>
        <ToDoBtn onClick={onDelelteAllClick}>Reset</ToDoBtn>
      </Header>
    </ToDoContainer>
  );
}
export default ToDoList;
