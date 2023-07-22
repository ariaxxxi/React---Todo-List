import React, {useState} from 'react'

export const EditTodoForm = ({editTodoText, task}) => {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!value) return

        editTodoText (value, task.id)
        setValue('')
    }
    

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>

        <input type='text' className='todo-input' value={value} onChange= {(e) => setValue(e.target.value)}
        placeholder='Update task' />

        <button type='submit' className='todo-btn'> Update
        </button>

    </form>
  )
}
