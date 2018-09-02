import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import jss from 'jss'
import Button from '@material-ui/core/Button';


class App extends Component {

  constructor(props) {
     super(props);
     this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    window.location.href = `http://localhost:3000/?message=success`
  }

  render() {
    const style = {
      loginForm: {
        'display': 'grid',
        'justify-content': 'space-around'
      }
    }

    const sheet = jss.createStyleSheet(style)
    sheet.attach()

    const {classes} = sheet

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Introduction to React (& Cypress)</h1>
        </header>
        <form
          onSubmit={this.handleSubmit}
          className={classes.loginForm}>
          <TextField
            id="name"
            label="Name"
            margin="normal"
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            margin="normal"
          />

        <Button type="submit">
            Primary
        </Button>
        </form>
      </div>
    );
  }
}


export default App;
