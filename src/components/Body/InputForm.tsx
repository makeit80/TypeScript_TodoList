import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {v4 as uuidv4} from "uuid"

import {insertData} from '../../redux/modules/todoList';
import axios from 'axios';

function InputForm() {
  const dispatch = useDispatch()
  const [form, setForm] = useState<{ title: string, contents: string }>({ title: '', contents: '' })

  function onChangeHandler(e: any) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const onClickSubmitHandler = async (e: any) => {
    e.preventDefault()
    const data = {
      id: uuidv4(),
      title: form.title,
      contents: form.contents,
      isDone: false
    }
    dispatch(insertData(data))
    await axios.post("http://localhost:5000/todos", data)
    setForm({title: '', contents:''})
  }

  return (
    <StForm onSubmit={onClickSubmitHandler}>
      <StDiv>
        <StInput
          type='text'
          name='title'
          placeholder='제목을 입력하세요'
          value={form.title}
          onChange={onChangeHandler}
        ></StInput>
      </StDiv>
      <StDiv>
        <StInput
          type='text'
          name='contents'
          placeholder='내용을 입력하세요'
          value={form.contents}
          onChange={onChangeHandler}
        ></StInput>
      </StDiv>
      <StButton type='submit'>추가</StButton>
    </StForm>

  )
}

const StForm = styled.form`
width: 100vw;
height: 200px;

background-color: gray;
margin-top: 100px;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const StDiv = styled.div`
margin-bottom: 20px;
`
const StInput = styled.input`
width: 390px;
height: 40px;

border: none;
border-bottom: 2px solid #bbb;
background-color: #424242e0;
outline: none;
border-radius: 5px;

color: white;
`
const StButton = styled.button`
width: 70px;
height: 30px;

border: none;
border-radius: 5px;
background-color: #484848;
color: white;
letter-spacing: 2px;
`


export default InputForm