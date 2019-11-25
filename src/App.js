import React from 'react';
import TaskList from './components/ListTaks';
import './App.css';


class App extends React.Component {

  state = {
    taskName: ['Tony', 'Alex', 'Robert'],
  }

  render() {
    return (
      <TaskList
        name={this.state.taskName}
      />
    )
  }

};


export default App;