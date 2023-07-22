import React, {useState} from 'react'

export const TodoForm = ({addTodoText}) => {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!value) return

        addTodoText (value)
        setValue('')
    }
    

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>

        <input type='text' className='todo-input' value={value} onChange= {(e) => setValue(e.target.value)}
        placeholder='Add a new todo' />

        <button type='submit' className='todo-btn'> Add Task
        </button>

    </form>
  )
}
