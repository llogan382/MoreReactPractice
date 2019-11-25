import React from 'react';
import './App.css';



class NameForm extends React.Component {

  const Form = props => {
    const [username, setUsername] = setState()

    const handleChangeUsername = e => {
      setUsername(e.target.value)
    }

    const handleSubmit = event => {
      alert(username)
      event.preventDefault()
    }
    render(){
      return (
        <form onSubmit={handleSubmit}>
          Username:
        <input type="text"
            value={username}
            onChange={handleChangeUsername}
          />

        </form>
      )
    }
  }


}




export default NameForm;
