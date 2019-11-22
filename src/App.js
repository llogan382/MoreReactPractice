import React from 'react';
import './App.css';



class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ value: this.element.value });
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
        <p>{this.state.value}</p>
      </div>

    );
  }
}




export default NameForm;
