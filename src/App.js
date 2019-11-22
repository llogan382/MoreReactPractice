import React from 'react';
import './App.css';



class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: []
    };

  }

  onSubmit = (event) => {
    event.preventDefault();
    alert('You are submitting' + this.state.name);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: [...this.state.name, e.target.value] });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>
            Name:
          <input name="name" value={this.state.value} onChange={this.onChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
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
