import React, {useReducer} from 'react';
import { Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import TodoContext from './Context/TodoContext';
import  todoReducer from "./Context/reducer"
import TodoForm from './Components/TodoForm';
import Todos from './Components/Todos';
import pic from "./images/unsplash.jpg"



function App() {
 
 const [todos, dispatch] = useReducer(todoReducer, []);
 
 
  return (
    <TodoContext.Provider value={{todos, dispatch}}>

      <Container fluid>
        <div className='wrapper'>
        <img src={pic}alt="todo pic" />
      <h1>Todo App with context API</h1>
      
      <TodoForm/>
      <Todos/>
      </div>
      </Container>
    </TodoContext.Provider>
  )
}

export default App;
