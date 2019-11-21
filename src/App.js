import React from 'react';
import './App.css';



class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const newName = this.state.value;
    this.setState = {
      value: newName
    };
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
          <input value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <ListNames name={this.state.value} />
      </div>

    );
  }
}

class ListNames extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {
      value: this.props.name
    }
  }
  render() {
    return <h1>{this.props.name}</h1>

  }
}



export default NameForm;
