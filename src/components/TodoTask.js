export const TodoTask = ({ task, toggleTask }) => {
  return (
    <div className="table">
      <input
        type='radio'
        checked={task.done}
        onChange={() => toggleTask(task)}
        className='check'
      />
    
      <p className="title">{task.name}</p>
      <p className="description">{task.description}</p>
    </div>
  )
}