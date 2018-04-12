import React, { Component } from 'react';
import './App.css';
import Home from './components/home'

export const UrlApi = 'http://localhost:8000';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}
