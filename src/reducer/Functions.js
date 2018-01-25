export function moveNote(note, state) {
    this.state.rightBoardNotes.push(note);
    this.setState({
        leftBoardNotes: this.state.leftBoardNotes,
        rightBoardNotes: this.state.rightBoardNotes
    });
}

export function updateNoteState(noteId, state) {
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

export function updateBoardNotes(notes, boardName, state) {
    this.setState({
        leftBoardNotes:
            boardName === 'leftBoard' ? notes : this.state.leftBoardNotes,
        rightBoardNotes:
            boardName === 'rightBoard' ? notes : this.state.rightBoardNotes
    });
}


//NOTES

export function add(note, editing = false, state) {
    let notes = this.props.notes;
    let newNote = {
      id: this.nextId(),
      note,
      board: this.props.name,
      editing
    };
    notes.push(newNote);

    this.props.updateBoardNotes(notes, this.props.name);
  }

  export function update(newText, index, state) {
    var notes = this.props.notes;
    notes[index].note = newText;

    this.props.updateBoardNotes(notes, this.props.name);
  }

  export function remove(index, state) {
    this.props.notes.splice(index, 1)
    this.props.updateBoardNotes(
      this.props.notes,
      this.props.name
    );
  }

  export function onCheck(index, state) {
    let note = this.props.notes.splice(index, 1)[0];
    this.props.movenote(note, this);
  }