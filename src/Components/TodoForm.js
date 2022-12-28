import React, {useState,useContext} from "react";  
import {FormGroup,
Input,
Button,
Form,
InputGroup,

}  from "reactstrap"

import {v4} from "uuid"
import TodoContext from "../Context/TodoContext";
import { ADD_TODO } from "../Context/action.types";


const TodoForm = () => {

    const [todoString, setTodoString] = useState("");
    const {dispatch} = useContext(TodoContext);

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(todoString === ""){
            return alert("please enter a todo");
        }

        const todo = {
            todoString,
            id: v4(),
        }

        dispatch({
            type:ADD_TODO,
            payload: todo
    })

    setTodoString("");
}

  return (
    <Form onSubmit={handleSubmit} >
      
        <InputGroup>
        <Input type="text" name="todo" id="todo" placeholder="Enter ToDo" value={todoString}  onChange={(e)=>setTodoString(e.target.value)} />
     
            <Button color="warning" >
            {/* //onclick  */} Add
            </Button>
            </InputGroup>
        
    </Form>
  )
}

export default TodoForm;