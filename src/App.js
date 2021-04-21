import logo from './logo.svg';
import './App.css';
import { Component } from "react";
import { renderIntoDocument } from 'react-dom/test-utils';

class App extends Component{
  render(){
    return (
      <div>
        <h2> Hello React from class</h2>
      </div>
    );
  }
}
export default App;
