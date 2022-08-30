import React, { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
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

function ToDoList() {
  const [toDo, setToDo] = useRecoilState(toDoState);

  const onDelelteAllClick = (e: React.FormEvent<HTMLButtonElement>) => {
    setToDo([]);
    setCustomCategories([]);
  };
  return (
    <ToDoContainer>
      <Header>
        <h1> ToDOs</h1>
        <ToDoBtn onClick={onDelelteAllClick}>Reset</ToDoBtn>
      </Header>
    </ToDoContainer>
  );
}
export default ToDoList;
