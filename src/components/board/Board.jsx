import React, { Component } from 'react'
import { store } from '../../app/App'
import Note from '../note/Note'

class Board extends Component {
  nextId() {
    this.uniqueId = this.uniqueId || 0;
    return this.uniqueId++;
  }

  add(note, editing = false) {
    store.dispatch({
      type: 'ADD',
      note: note,
      editing: editing
    })
  }

  update(newText, index) {
    store.dispatch({
      type: 'UPDATE',
      newText: newText,
      index: index
    })
  }

  remove(index) {
    store.dispatch({
      type: 'REMOVE',
      index: index
    })
  }

  onCheck(index) {
    store.dispatch({
      type: 'ON_CHECK',
      index: index
    })
  }

  componentDidMount() {
    var self = this;
    if (this.props.count) {
      this.props.tasks.forEach(function (task) {
        self.add(task);
      });
    }
  }

  eachNote(note, index, scope) {
    let time = null;
    if (scope.props.name === 'rightBoard' && !note.time) {
      let date = new Date();
      let minutes = date.getMinutes();
      time = date.getHours() + ':' + (minutes < 10 ? '0' + minutes : minutes);
    }

    return (
      <Note
        key={note.id}
        id={note.id}
        index={index}
        board={scope.props.name}
        time={time}
        editing={note.editing}
      >
        {note.note}
      </Note>
    );
  }

  mapNotes() {
    let scope = this;
    return scope.props.notes.map((note, i) => scope.eachNote(note, i, scope));
  }

  render() {
    const button = <button
      className='btn btn-sm btn-success glyphicon glyphicon-plus'
      onClick={this.add.bind(this, 'New Note', true)}
    />;

    var notes = this.mapNotes();

    return (
      <div className='board' id={this.props.id}>
        {notes}
        {this.props.addButton ? button : null}
      </div>
    )
  }
}

export default Board;
