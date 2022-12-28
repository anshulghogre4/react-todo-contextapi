import React, {useReducer} from 'react';
import { Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import TodoContext from './Context/TodoContext';
import  todoReducer from "./Context/reducer"



function App() {
 
 const [todos, dispatch] = useReducer(todoReducer, []);
 
 
  return (
    <TodoContext.Provider value={{todos, dispatch}}>

      <Container fluid>
      <h1>Todo App with context API</h1>
      </Container>
    </TodoContext.Provider>
  )
}

export default App;
