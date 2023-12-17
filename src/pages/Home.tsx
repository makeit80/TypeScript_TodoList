import React, { useEffect } from 'react'
import InputForm from '../components/Body/InputForm'
import Todos from '../components/Body/Todos'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { initialData } from '../redux/modules/todoList'
import { useAppSelector, useAppDispatch } from '../hooks'

export type TodoPropsType = { id: string; title: string; contents: string; isDone: boolean; }

// Promise<TodosType[]>
function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const { data } = await axios.get("http://localhost:5000/todos")
      dispatch(initialData(data))
    }
    // Q&A: Promise Type 지정 이거 왜 안됨?
    // async function fetchData():Promise<TodoTypes[]> {
    //   const {data} = await axios.get("http://localhost:5000/todos")
    //   dispatch(initialData(data))
    // }
    fetchData()
  }, [])

  const todoList = useAppSelector(state => state.todoList)

  return (
    <StWrapper>
      <InputForm></InputForm>
      <StP>Todo</StP>
      <StDiv>
        {
          todoList.value
            .filter(item => !item.isDone)
            .map((item) => {
              return (
                <StItem>
                  <Todos
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    contents={item.contents}
                    isDone={item.isDone}
                  ></Todos>
                </StItem>
              )
            })
        }
      </StDiv>
      <StP>Done</StP>
      <StDiv>
        {
          todoList.value
            .filter(item => item.isDone)
            .map((item) => {
              return (
                <StItem>
                  <Todos
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    contents={item.contents}
                    isDone={item.isDone}
                  ></Todos>
                </StItem>
              )
            })
        }
      </StDiv>
    </StWrapper>
  )
}
const StWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-bottom: 100px;
`

const StDiv = styled.div`
display: grid;
grid-template-columns: 700px;
grid-auto-rows: 70px;

background-color: #cccccc;

overflow: auto;
overflow-x: hidden;

scroll-behavior: smooth;
&::-webkit-scrollbar {
  background-color: #b3b3b3;
  border-radius: 30px;
}
&::-webkit-scrollbar-thumb {
  background-color: #00000039;
  border-radius: 30px;
}

margin-top: 30px;
`
const StItem = styled.div`
position: relative;
margin: 5px;

background-color: gray;
`
const StP = styled.p`
color: #3d3d3d;
font-size: 50px;
text-align: center;
font-weight: bold;
letter-spacing: 2px;

margin-top: 30px;
border-bottom: 3px solid gray;
`

export default Home;