import React from 'react'
import { createStore } from 'redux'

import reducer from '../reducer'

import './App.css'
import BoardContainer from '../components/boardcontainer/BoardContainer'

import Tasks from '../js/Mockdata.js'

const initialState = {
  boards: [
    {
      notes: Tasks,
      count: Tasks.length,
      addButton: true,
      name: 'leftBoard',
      id: 'left-container',
      title: 'TO DO List',
      titleClassId: 'left-container-title',
      className: 'left-board'
    }, {
      notes: [],
      count: 0,
      addButton: false,
      name: 'rightBoard',
      id: 'right-container',
      title: 'Already Checked',
      titleClassId: 'right-container-title',
      className: 'right-board'
    }
  ],
  tasks: Tasks
}

export const store = createStore(reducer, initialState);

class App extends React.Component {
  render() {
    return (
      <div className='main-content'>
        <header id='pageHeader'>
          <h2>My First React Page</h2>
        </header>
        <BoardContainer />
        <footer id='pageFooter'>TecFil @2017</footer>
      </div>
    );
  }
}

export default App;
