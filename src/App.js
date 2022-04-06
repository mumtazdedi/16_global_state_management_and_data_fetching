import { React, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './components/Title';
import Input from './components/Input';
import Todo from './components/Todo';
/** redux */
import { useDispatch, useSelector } from 'react-redux';
import { removeTodoTask } from './store/TodoTask';


function App() {

  const todos = useSelector(state => state.todoTask);
  const dispatch = useDispatch();


  return (
    <>
      <Title />
      <Input />
      <Todo />

    </>
  );
}

export default App;
