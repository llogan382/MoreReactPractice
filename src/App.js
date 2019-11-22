import React from 'react';
import './App.css';



class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ['Luke', 'Eli']
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.element.value);
    this.setState({ value: [...this.state.value, this.element.value] });
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              ref={el => this.element = el}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Child2 dateFromParent={this.state.value} />
      </div>

    );
  }
}

class Child2 extends React.Component {
  render() {
    return (
      <div>
        {this.props.dateFromParent}
      </div>
    );
  }
}



export default NameForm;
