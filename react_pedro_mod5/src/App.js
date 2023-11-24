// https://www.youtube.com/watch?v=f55qeKGgB_M&t=656s
import './App.css';
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  // replaced by single line and object instead of simple string
  // const deleteTask = (taskName) => {
  //   const newTodoList = todoList.filter((task) => {
  //     return task !== taskName;
  //   });
  //   setTodoList(newTodoList);
  // };

  // - reduced to shorter form
  // const deleteTask = (taskName) => {
  //   const newTodoList = todoList.filter((task) => {
  //     if (task === taskName){
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   });
  //   setTodoList(newTodoList);
  // };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div> 
      <div className="list">
        {todoList.map((task) => {
          return (
            <div className='task'>
              <h1>{task.taskName}</h1>
              <button 
                className='button'
                onClick={() => deleteTask(task.id)}
                >
                  DONE
              </button>
            </div>
            );
        })}
      </div>   
    </div>
  );
}

export default App;
