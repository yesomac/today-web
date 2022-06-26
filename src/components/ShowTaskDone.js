export const ShowTaskDone = ({ isCheked, setShowCompled, cleanTasks }) => {

  const handleDelete = () => {
    if (window.confirm('¿Seguro que desea eliminar todas las tareas realizadas?')) {
      cleanTasks()
    }
  }

  return (
    <div className="showTasksDone">
      <label>
        <input
          type='checkbox'
          checked={isCheked}
          onChange={e => setShowCompled(e.target.checked)}
        />
      </label>
      {''}
      <label>Mostrar</label>

      <button
        onClick={handleDelete}
      >Borrar</button>
    </div>
  )

}