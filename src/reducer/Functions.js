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