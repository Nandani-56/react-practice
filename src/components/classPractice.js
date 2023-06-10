import React, { Component } from "react";

export default class ClassTodo extends Component {
  constructor() {
    super();
    this.state = {
      task: "",
      todoList: [],
    };
  }

  handleInputChange(e) {
    this.setState({ task: e.target.value });
  }

  addTask() {
    const task = {
      id:
        this.state.todoList.length === 0
          ? 1
          : this.state.todoList[this.state.todoList.length - 1].id + 1,
      name: this.state.task,
    };

    // console.log(this.state.todoList.length);
    // console.log(this.state.todoList);
    this.setState({ todoList: [...this.state.todoList, task] });
  }

  deleteTask(id) {
    const newTodoList = this.state.todoList.filter((task) => {
      if (task.id === id) return false;
      else return true;
    });

    this.setState({ todoList: newTodoList });
  }

  render() {
    return (
      <div style={{ textAlign: "center" }} className="mt-5">
        <h1>Todo List using Class Component</h1>
        <div className="mt-5">
          <input onBlur={(e) => this.handleInputChange(e)} />
          <button
            onClick={() => this.addTask()}
            className="ms-4 btn btn-primary"
          >
            Add Task
          </button>
        </div>
        <div>
          <h4 className="mt-4">Task List</h4>
          {this.state.todoList.map((task, index) => (
            <div className="mt-3">
              <span className="me-5">{index + 1}</span>
              <span>{task.name}</span>
              <button
                onClick={() => this.deleteTask(task.id)}
                className="btn btn-danger ms-5"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
