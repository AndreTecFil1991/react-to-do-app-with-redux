import React, { Component } from 'react'
import { store } from '../../app/App'
import Note from '../note/Note'

class Board extends Component {
  constructor(props) {
    super(props)
    this.higherId = 0
  }

  add(text, editing = false) {
    let note = {
      id: this.higherId++,
      text,
      board: this.props.name,
      editing
    }

    store.dispatch({
      type: 'ADD_NOTE',
      boardName: this.props.board.name,
      note: note
    })
  }

  update(newText, index) {
    store.dispatch({
      type: 'UPDATE',
      boardName: this.props.board.boardName,
      newText: newText,
      index: index
    })
  }

  remove(index) {
    store.dispatch({
      type: 'REMOVE',
      boardName: this.props.boardName,
      index: index
    })
    let notes = this.board.notes
    notes.splice(index, 1)

    store.dispatch({
      type: 'UPDATE_BOARD_NOTES',
      notes: notes,
      boardName: this.props.boardName
    })
  }

  onCheck(index) {
    let note = this.props.notes.splice(index, 1)[0];

    store.dispatch({
      type: 'MOVE_NOTE',
      note: note,
      boardName: this.props.board.name
    })
  }

  getNotes(board) {
    this.higherId = 0;
    const notes = board.notes.map(note => {
      let time = null;
      if (board.name === 'rightBoard' && !note.time) {
        let date = new Date();
        let minutes = date.getMinutes();
        time = date.getHours() + ':' + (minutes < 10 ? '0' + minutes : minutes);
      }

      return (
        <Note
          time={time}
          key={note.id}
          id={this.higherId++}
          board={note.board}
          editing={note.editing}
        >
          {note.text}
        </Note>
      )
    })

    return notes
  }

  render() {
    const button = <button
      className='btn btn-sm btn-success glyphicon glyphicon-plus'
      onClick={this.add.bind(this, 'New Note', true)}
    />

    const notes = this.getNotes(this.props.board)

    return (
      <div className='board' id={this.props.board.id}>
        {notes}
        {this.props.addButton ? button : null}
      </div>
    )
  }
}

export default Board;
