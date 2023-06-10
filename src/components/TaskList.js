import React from "react";
import Task from "./Task"

function TaskList({ tasks, setTasks }) {

  function deleteTask(text) {
    setTasks(tasks.filter((task) => task.text !== text))
  }

  return (
    <div className="tasks">
      {tasks.map((task) => {
        return <Task key={Math.random()} category={task.category} text={task.text} deleteTask={deleteTask} />
      })}
    </div>
  );
}

export default TaskList;
