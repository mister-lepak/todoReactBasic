import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      tasks: [],
      id: [0],
      edit: [],
      editTask: "",
    };

    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onSubmitEdit = this.onSubmitEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.editChange = this.editChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: "",
      id: this.state.id.concat(this.state.id.length),
      edit: this.state.edit.concat(false),
    });
    console.log(this.state.id);
  };

  onDelete = (id) => {
    this.setState({
      tasks: this.state.tasks.filter((el, index) => index !== id),
    });
  };

  onEdit = (id) => {
    this.setState({
      edit: this.state.edit.map((el, index) => {
        if (index === id) {
          this.setState({
            editTask: this.state.tasks[id],
          });
          return true;
        } else {
          return false;
        }
      }),
    });
  };

  editChange = (e, val) => {
    this.setState({ editTask: e.target.value });
  };

  onSubmitEdit = (index) => {
    this.setState({
      tasks: this.state.tasks.map((task, id) => {
        return id === index ? this.state.editTask : task;
      }),
    });
    this.onEdit();
  };

  render() {
    const { task, tasks, edit, id, editTask } = this.state;

    return (
      <div>
        <div className="ui two column centered grid">
          <div className="column">
            <form className="ui form" onSubmit={this.onSubmitTask}>
              <div className="field">
                <label>Input your task</label>
                <input
                  onChange={this.handleChange}
                  value={task}
                  type="text"
                  name="task"
                  placeholder="Put your task"
                ></input>
              </div>
              <button className="ui button" type="submit">
                Add Task
              </button>
            </form>
          </div>
        </div>
        <Overview
          tasks={tasks}
          id={id}
          onDelete={this.onDelete}
          edit={edit}
          editTask={editTask}
          onEdit={this.onEdit}
          onSubmitEdit={this.onSubmitEdit}
          editChange={this.editChange}
        ></Overview>
      </div>
    );
  }
}

export default App;
