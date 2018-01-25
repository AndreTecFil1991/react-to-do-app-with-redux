import React, { Component } from 'react'
import Draggable from 'react-draggable'
import './Glyphicon.css'
import './Note.css'
import {
  retrieveBoardDimensions,
  NoteMeasure,
  randomBetween
} from '../../js/Calculations.js'
import { store } from '../../app/App'

class Note extends Component {
  edit() {
    store.dispatch({
      type: 'CHANGE_NOTE_EDITION_STATE',
      noteId: this.props.id,
      boardName: this.props.board
    })
  }

  save() {
    store.dispatch({
      type: 'UPDATE_NOTE',
      noteId: this.props.id,
      boardName: this.props.board
    })
  }

  remove() {
    store.dispatch({
      type: 'REMOVE_NOTE',
      noteId: this.props.id,
      boardName: this.props.board
    })
  }

  checked() {
    store.dispatch({
      type: 'CHECK_NOTE',
      id: this.props.id,
      boardName: this.props.board
    })
  }

  componentWillMount() {
    var boardDimensions = retrieveBoardDimensions(this.props.board);
    this.style = {
      left:
        randomBetween(
          boardDimensions.width.start,
          boardDimensions.width.end - NoteMeasure
        ) + 'px',
      top:
        randomBetween(
          boardDimensions.height.start,
          boardDimensions.height.end - NoteMeasure
        ) + 'px'
    };
  }

  renderDisplay() {
    let visibilityControl = 'visible';

    if (this.props.board === 'rightBoard') visibilityControl = 'hidden';
    return (
      <Draggable>
        <div className='note' style={this.style}>
          <p>
            {this.props.children}
            <br />
            {this.props.time}
          </p>
          <span>
            <button
              onClick={this.checked.bind(this)}
              className='btn btn-sm btn-success glyphicon glyphicon-ok'
              style={{ visibility: visibilityControl }}
            />
            <button
              onClick={this.edit.bind(this)}
              className='btn btn-sm btn-primary glyphicon glyphicon-pencil'
              style={{ visibility: visibilityControl }}
            />
            <button
              onClick={this.remove.bind(this)}
              className='btn btn-sm btn-danger glyphicon glyphicon-trash'
            />
          </span>
        </div>
      </Draggable>
    );
  }

  renderForm() {
    return (
      <div className='note' style={this.style}>
        <textarea
          ref='newText'
          defaultValue={this.props.children}
          className='form-control'
        />
        <button
          onClick={this.save.bind(this)}
          className='btn btn-sm btn-success glyphicon glyphicon-floppy-disk'
        />
      </div>
    );
  }

  render() {
    if (this.props.editing) {
      return this.renderForm();
    } else {
      return this.renderDisplay();
    }
  }
}

export default Note;
