import { useEffect, useState } from 'react';

//add task
import { AddTask } from './components/AddTask';
import { CardTask } from './components/CardTask';
import { ShowTaskDone } from './components/ShowTaskDone';
import './style/style.css'
import './style/media.css'

function App() {

  const [tasksItems, setTaskItems] = useState([])

  const [showCompleted, setShowCompleted] = useState(true)

  function addNewTask(taskName, taskDescription) {
    if (!tasksItems.find(task => task.name === taskName)) {
      setTaskItems([...tasksItems,
      {
        name: taskName,
        description: taskDescription,
        done: false
      }])
    }
  }

  //cambio estado done
  const toggleTask = task => {
    setTaskItems(
      tasksItems.map(t => (t.name === task.name) ? { ...t, done: !t.done } : t)
    )
  }

  //revisando si hay datos
  useEffect(() => {
    const data = localStorage.getItem('task')
    if (data) {
      setTaskItems(JSON.parse(data))
    }
  }, [])

  //delete
  const cleanTasks = () => {
    setTaskItems(tasksItems.filter(task => !task.done))
    setShowCompleted(false)
  }

  //task es un arreglo
  //guardando las tareas
  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(tasksItems))
  }, [tasksItems])

  return (
    <main>
      <div className="container">
        <div className="cards-todo">
          <div className="cards card-todo">
            <section className='section-form'>
              <h1>Today</h1>
              <AddTask addNewTask={addNewTask} />
            </section>

            <h4>Pendientes</h4>
            <section className='section-add'>
              <CardTask
                tasks={tasksItems}
                toggleTask={toggleTask}
              />
            </section>
          </div>
          <div className="cards card-done">
            <h4>Realizadas</h4>
            <ShowTaskDone
              isCheked={showCompleted}
              setShowCompled={(checked) => setShowCompleted(checked)}
              cleanTasks={cleanTasks}
            />
            <section className='section-done'>
              {/* Show Done */}
              {showCompleted && (
                <CardTask
                  tasks={tasksItems}
                  // tasksDes={descriptionTask}
                  toggleTask={toggleTask}
                  showCompleted={showCompleted}
                />
              )}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
