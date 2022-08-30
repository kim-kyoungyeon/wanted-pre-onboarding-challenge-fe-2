import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { categoryState, customCategoriesState } from './atoms';
import styled from 'styled-components';

interface IForm {
  customCategory: string;
}

const ToDoForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  border: 1px solid blue;
  div {
    border: 1px solid red;
    idth: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    input {
      border: solid green;
    }
  }
  span {
    transition: 0.5s;
    color: black;
    border: solid purple;
  }
`;

const TotoBtn = styled.button`
  background-color: ${(prop) => prop.theme.bgColor};
  color: ${(prop) => prop.theme.textColor};
  box-shadow: ${(prop) => prop.theme.boxShadow};
  border-radius: 10px;
  padding: 10px 15px;
  border: none;
  &:hover {
    box-shadow: ${(prop) => prop.theme.clickedStyle};
  }
`;

function CreateCategory() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();
  const [customeCategories, setCustomCategories] = useRecoilState(
    customCategoriesState
  );
  const setCategory = useSetRecoilState(categoryState);

  const handleValid = ({ customCategory }: IForm) => {
    setValue('customCategory', '');
    setCategory(customCategoriesState as any);
    setCustomCategories((oldCategories) => {
      return [...oldCategories, customCategory];
    });
  };
  useEffect(() => {
    localStorage.setItem('CATEGORIES_KEY', JSON.stringify(customeCategories));
  }, [customCategoriesState]);

  return (
    <ToDoForm onSubmit={handleSubmit(handleValid)}>
      <div>
        <input
          {...register('customCategory', {
            required: 'the name cannot exceed 8 letters',
            minLength: 1,
            maxLength: 8,
          })}
          placeholder='make your category'
          type='text'
        ></input>
        <TotoBtn></TotoBtn>
      </div>
      <span>{errors.customCategory?.message}</span>
    </ToDoForm>
  );
}
export default CreateCategory;
