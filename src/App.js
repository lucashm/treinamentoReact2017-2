import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      username : '',
      password : '',
      size: 30
    }
  }

  handleChange = (event) => {
    this.setState({username: event.target.value});
    console.log(this.state)
  }

  increaseSize = (event) => {
    let actualSize = this.state.size;
    this.setState({size: actualSize + 10});
  }

  render() {
    return (
      <div className="App">
      <Header title = "nice" increaseFunction = {this.increaseSize}/>
        <p className="App-intro">
        <input onChange = {this.handleChange}/>
        <p style = {{fontSize: this.state.size}}>{this.state.username}</p>

        </p>
      </div>
    );
  }
}

export default App;
