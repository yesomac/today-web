import { useState } from 'react'

export const AddTask = ({ addNewTask }) => {
  const [
    newTaskName, setNewTaskName,
  ] = useState('')
  const [newDescriptionTask, setNewDescriptionTask] = useState('')

  const handleSutmib = (e) => {
    if (e !== ' ') {
      e.preventDefault()
      addNewTask(newTaskName, newDescriptionTask)
      setNewTaskName('')
      setNewDescriptionTask('')
    }
  }

  return (
    <div>
      <form onSubmit={handleSutmib}>
        <input
          type='text'
          placeholder='Tarea'
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          className='field'
        />
        <br />
        <input
          type='textarea'
          placeholder='Descripcion'
          value={newDescriptionTask}
          onChange={(e) => setNewDescriptionTask(e.target.value)}
          className='field description_input'
        />
        <br/>
        <button
        >Crear</button>
      </form>
    </div>
  )
}