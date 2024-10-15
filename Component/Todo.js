import "./Todo.css";
import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";
import { getLocalStorageData, setLocalStorageData } from "./TodoLocalStorage";


const  Todo = () =>{
  const [task, settask] = useState(() => getLocalStorageData());

  const handleFormSubmit = (inputValue) => {
    const {id, content, checked} = inputValue;

    // to check if the input field is empty or not
    if (!content) return;

    // to checkif the data is already existing or not
    // if (task.includes(inputValue)) return;
    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content
    );

    if (ifTodoContentMatched) return;

    settask((prevTask) => [...prevTask, {id, content, checked}]);
  }

  // Add data to localStorage

  setLocalStorageData(task)



  const handleDelete = (value) =>{

    const updateTask = task.filter((curTask) => curTask.content !== value);
    settask(updateTask);
  }

  const handleClearAll = () =>{
    settask([]);
  }

  const handleCheck = (content) =>{
    const updateTask = task.map((curTask) => {
      if(curTask.content === content){
        return {...curTask, checked: !curTask.checked};
      }else{
        return curTask;
      }
    });
    settask(updateTask);
  };


  return (
    <section className = "todo-container">
      <header>
        <h1>To-Do List</h1>
        <TodoDate/>
      </header>
      <TodoForm onAddTodo = {handleFormSubmit}/>
      <section className="myUnOrdList">
        <ul>
          {task.map((curTask)=>{
            return (
              <TodoList
              key={curTask.id}
              data={curTask.content}
              checked={curTask.checked}
              onHandleDelete={handleDelete}
              onHandleCheck={handleCheck}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearAll}>Clear All</button>
      </section>
    </section>
  );
};

export default Todo;