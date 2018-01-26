import React, { Component } from 'react'
import Board from '../board/Board'
import { store } from '../../app/App'

class BoardContainer extends Component {
  render() {
    const state = store.getState();
    const boards = state.boards.map(board =>
      <div className={board.className} key={board.className}>
        <div className='title' id={board.titleClassId}>
          <h4>{board.title}</h4>
        </div>
        <Board
          board={board}
        />
      </div>
    );
    return (
      <div className='board-container'>
        {boards}
      </div>
    );
  }
}

export default BoardContainer;
