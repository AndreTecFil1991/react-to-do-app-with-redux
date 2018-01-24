import React from "react";
import Board from "../board/Board";
import Tasks from '../../js/Mockdata'

const initialState = {
  leftBoard: {
    leftBoardNotes: [],
    notes: [],
    count: 0,
    addButton: true,
    name: 'leftBoard',
    id: 'left-container',
    title: 'TO DO List',
    titleClassName: 'left-container-title',
    className: 'left-board'
  },
  rightBoard: {
    rightBoardNotes: [],
    notes: [],
    count: 0,
    addButton: false,
    name: 'rightBoard',
    id: 'right-container',
    title: 'Already Checked',
    titleClassName: 'right-container-title',
    className: 'right-board'
  },
  tasks: Tasks
}

class BoardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.moveNote = this.moveNote.bind(this);
    this.updateNoteState = this.updateNoteState.bind(this);
    this.updateBoardNotes = this.updateBoardNotes.bind(this);

  }
  moveNote(note) {
    this.state.rightBoardNotes.push(note);
    this.setState({
      leftBoardNotes: this.state.leftBoardNotes,
      rightBoardNotes: this.state.rightBoardNotes
    });
  }

  updateNoteState(noteId, state) {
    let leftBoardNotes = this.state.leftBoardNotes;
    leftBoardNotes.find(item => {
      if (item.id === noteId) {
        item.editing = state;
      }
      return item.id === noteId;
    });

    this.setState({
      leftBoardNotes: leftBoardNotes,
      rightBoardNotes: this.state.rightBoardNotes
    });
  }

  updateBoardNotes(notes, boardName) {
    this.setState({
      leftBoardNotes:
        boardName === "leftBoard" ? notes : this.state.leftBoardNotes,
      rightBoardNotes:
        boardName === "rightBoard" ? notes : this.state.rightBoardNotes
    });
  }

  getLeftBoard() {
    return (
      <Board
        tasks={Tasks}
        count={Tasks.length}
        addButton={true}
        name="leftBoard"
        movenote={this.moveNote.bind(this)}
        updateNoteState={this.updateNoteState.bind(this)}
        updateBoardNotes={this.updateBoardNotes.bind(this)}
        notes={this.state.leftBoardNotes}
        id="left-container"
      />
    );
  }

  getRightBoard() {
    return (
      <Board
        count={0}
        addButton={false}
        name="rightBoard"
        updateBoardNotes={this.updateBoardNotes.bind(this)}
        notes={this.state.rightBoardNotes}
        id="right-container"
      />
    );
  }

  render() {
    return (
      <div className="board-container">
        <div className="left-board">
          <div className="title" id="left-container-title">
            <h4>TO DO List</h4>
          </div>
          {this.getLeftBoard()}
        </div>
        <div className="right-board">
          <div className="title" id="right-container-title">
            <h4>Already checked</h4>
          </div>
          {this.getRightBoard()}
        </div>
      </div>
    );
  }
}

export default BoardContainer;
