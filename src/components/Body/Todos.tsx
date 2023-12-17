import React from 'react'
import { TodoPropsType } from '../../pages/Home'
import styled from 'styled-components'
import { switchData, deleteData } from '../../redux/modules/todoList'
import { useAppDispatch } from '../../hooks'
import axios from 'axios'


function Todos({ id, title, contents, isDone }: TodoPropsType) {
  const dispatch = useAppDispatch()

  function onClickSwitchHandler() {
    async function fetchData(): Promise<void> {
      await axios.patch(`http://localhost:5000/todos/${id}`, {isDone: !isDone})
      dispatch(switchData(id))
    }
    fetchData()
  }

  function onClickDeleteHandler() {
    dispatch(deleteData(id))
    async function fetchData(): Promise<void> {
      await axios.delete(`http://localhost:5000/todos/${id}`)
      dispatch(switchData(id))
    }
    fetchData()
  }

  return (
    <StDiv>
      <StUl>
        <StLi>
          <StTitle>title : {title}</StTitle>
          <StContents>{contents}</StContents>
          <StButton onClick={onClickSwitchHandler}>{isDone ? '취소' : '완료'}</StButton>
          <StDeleteButton onClick={onClickDeleteHandler}>X</StDeleteButton>
        </StLi>
      </StUl>
    </StDiv>
  )
}

const StDiv = styled.div`
`
const StUl = styled.ul`
  
`
const StLi = styled.li`
  
`
const StTitle = styled.p`
position: absolute;
top: 35%;
left: 3%;
`
const StContents = styled.p`
position: absolute;
top: 35%;
right: 15%;
`
const StButton = styled.button`
position: absolute;
top: 30%;
right: 5.5%;

width: 50px;
height: 25px;

border: none;
background-color: #4f4f4f;
color: white;
letter-spacing: 2px;
text-align: center;

border-radius: 5px;

&:hover {
  background-color: #6f6f6f;
  transition: 0.5s;
}
`
const StDeleteButton = styled.button`
position: absolute;
top: 39%;
right: 2%;

border: none;
background-color: transparent;
font-weight: bold;
`

export default Todos