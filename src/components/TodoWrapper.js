import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo'
import { v4 as uuidv4 } from 'uuid';
import { EditTodoForm } from './EditTodoForm';
uuidv4();

export const TodoWrapper = () => {

    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos([...todos, {id: uuidv4(), text:todo, completed:false, isEditing: false}])

        console.log(todos)
    }

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const updateTodo = (task,id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, text: task, isEditing: !todo.isEditing} : todo))
    }

  return (
    <div className='TodoWrapper'>

        <h1>Todo List</h1>
        <TodoForm addTodoText={addTodo}/>

        {todos.map((todo,index) => (
            todo.isEditing ? <EditTodoForm editTodoText={updateTodo} task={todo} /> :

            <Todo task={todo} num={index} 
            toggleComplete={toggleComplete} 
            deleteTodo = {deleteTodo}
            editTodo={editTodo}
            />
        ))}

    </div>
  )
}
