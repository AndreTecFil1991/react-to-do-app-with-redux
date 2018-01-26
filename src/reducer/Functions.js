export function changeNoteEditionState(noteId, boardName, state) {
    let localState = state
    const boardIndex = getBoardIndex(boardName, state)
    let boardNotes = localState.boards[boardIndex].notes

    boardNotes.find(note => {
        if (note.id === noteId) {
            note.editing = !note.editing;
        }
        return note.id === noteId;
    })

    Object.assign({}, state, localState);
}

export function updateBoardNotes(notes, boardName, state) {
    let localState = state
    const boardIndex = getBoardIndex(boardName, state)

    localState.boards[boardIndex].notes = notes

    Object.assign({}, state, localState);
}


// AUX FUNCTIONS #####################################################################################################
function getOtherBoardIndex(boardName, state) {
    let boards = state.boards
    const otherBoardIndex = boards.findIndex(board => {
        return board.name !== boardName
    })

    return otherBoardIndex
}

function getBoardIndex(boardName, state) {
    let boards = state.boards
    const boardIndex = boards.findIndex(board => {
        return board.name === boardName
    })

    return boardIndex
}
//####################################################################################################################

export function updateNote(boardName, newText, id, state) {
    let localState = state
    const boardIndex = getBoardIndex(boardName, state)

    let notes = localState.boards[boardIndex].notes
    notes.find(note => {
        if (note.id === id) {
            note.text = newText
            note.editing = false
        }
    })

    Object.assign({}, state, localState);
}

export function removeNote(boardName, id, state) {
    let localState = state
    const boardIndex = getBoardIndex(boardName, state)
    let notes = state.boards[boardIndex].notes
    const index = notes.findIndex(note => {
        return note.id === id
    })
    notes.splice(index, 1)

    Object.assign({}, state, localState);
}

export function checkNote(id, boardName, state) {
    let localState = state
    //origin board
    const boardIndex = getBoardIndex(boardName, state)
    let notes = localState.boards[boardIndex].notes
    //splice note from origin board
    const index = notes.findIndex(note => {
        return note.id === id
    })
    const note = notes.splice(index, 1)[0];

    //destiny board
    const otherBoardIndex = getOtherBoardIndex(boardName, state)
    //push board to destiny board
    localState.boards[otherBoardIndex].notes.push(note)

    Object.assign({}, state, localState);
}

export function addNote(boardName, note, state) {
    let localState = state
    const boardIndex = getBoardIndex(boardName, state)

    localState.boards[boardIndex].notes.push(note)

    Object.assign({}, state, localState);
}