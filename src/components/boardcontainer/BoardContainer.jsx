import React, { Component } from 'react'
import Board from '../board/Board'
import { store } from '../../app/App'

class BoardContainer extends Component {

  moveNote(note) {
    store.dispatch({
      type: 'MOVE_NOTE',
      note: note
    })
  }

  updateNoteState(noteId) {
    store.dispatch({
      type: 'UPDATE_NOTE_STATE',
      noteId: noteId
    })
  }

  updateBoardNotes(notes, boardName) {
    store.dispatch({
      type: 'UPDATE_BOARD_NOTES',
      boardName: boardName
    })
  }

  render() {
    const state = store.getState();
    const boards = state.boards.map(board => (
      <div className={state.className}>
        <div className='title' id={state.titleClassId}>
          <h4>{state.title}</h4>
        </div>
        <Board
          count={state.tasks.length}
          addButton={state.addButton}
          name={state.name}
          notes={state.notes}
          id={state.id}
        />
      </div>
    ));
    return (
      <div className='board-container'>
        {boards}
      </div>
    );
  }
}

export default BoardContainer;
