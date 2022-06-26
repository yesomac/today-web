import { TodoTask } from "./TodoTask";

export const CardTask = ({ tasks, toggleTask, showCompleted = false }) => {
  
  const TaskTableList = (doneValue) => {
    return (
      tasks
        .filter(task => task.done === doneValue)
        .map(task => (
          <TodoTask
            task={task}
            key={task.name}
            toggleTask={toggleTask}
          />
        ))
    )
  }

  return (
    <>
      {TaskTableList(showCompleted)}
    </>
  )
}