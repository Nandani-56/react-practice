import React from "react";
import { useState } from "react";
import axios from "axios";

const Task = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState({
    newTaskName: "",
  });

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      name: newTask,
    };
    setTodoList([...todoList, task]);
    setNewTask({ newTaskName: "" });
  };

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => {
      if (task.id === id) return false;
      else return true;
    });
    setTodoList(newTodoList);
  };

  return (
    <div style={{ textAlign: "center" }} className="mt-5">
      <h1>Todo List Using Functional Component</h1>
      <div className="addTask mt-5">
        <input
          type="text"
          placeholder="Enter Task"
          onChange={handleChange}
          value={newTask.newTaskName}
        />
        <button
          type="submit"
          onClick={addTask}
          className="btn btn-primary ms-3"
        >
          Add Task
        </button>
      </div>
      <div className="list mt-4">
        <h4>Task List</h4>
        {todoList.length > 0 &&
          todoList.map((task, index) => {
            return (
              <div className="mt-3">
                <span className="me-5">{index + 1}</span>
                <span>{task.name}</span>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="btn btn-danger ms-5"
                >
                  Delete
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Task;
