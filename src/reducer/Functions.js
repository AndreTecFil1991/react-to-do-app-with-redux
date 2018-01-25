export function changeNoteEditionState(noteId, boardName, state) {
    let localState = state
    const boardIndex = getBoardIndex(boardName)
    let boardNotes = localState.boards[boardIndex].notes

    boardNotes.find(note => {
        if (note.id === noteId) {
            note.editing = state;
        }
        return note.id === noteId;
    })

    Object.assign({}, state, localState)
}

export function updateBoardNotes(notes, boardName, state) {
    let localState = state
    const boardIndex = getBoardIndex(boardName)

    localState.boards[boardIndex].notes = notes

    Object.assign({}, state, localState)
}


// AUX FUNCTIONS #####################################################################################################
function getOtherBoardIndex(boardName, state) {
    let boards = state.boards
    const otherBoardIndex = boards.findIndex(board => {
        return board.boardName !== boardName
    })

    return otherBoardIndex
}

function getBoardIndex(boardName, state) {
    let boards = state.boards
    const boardIndex = boards.findIndex(board => {
        return board.boardName === boardName
    })

    return boardIndex
}
//####################################################################################################################

export function updateNote(boardName, newText, index, state) {
    let localState = state
    const boardIndex = getBoardIndex(boardName)

    let notes = localState.boards[boardIndex].notes
    notes[index].note = newText;

    Object.assign({}, state, localState)
}

export function removeNote(boardName, index, state) {
    let localState = state
    const boardIndex = getBoardIndex(boardName, state)
    let notes = state.boards[boardIndex]
    notes.splice(index, 1)

    Object.assign({}, state, localState)
}

export function checkNote(index, boardName, state) {
    let localState = state
    //origin board
    const boardIndex = getBoardIndex(boardName)
    let notes = state.boards[boardIndex].notes
    //splice note from origin board
    const note = notes.splice(index, 1)[0];

    //destiny board
    const otherBoardIndex = getOtherBoardIndex(boardName)
    //push board to destiny board
    localState.boards[otherBoardIndex].notes.push(note)

    Object.assign({}, state, localState)
}

export function addNote(boardName, note, state) {
    let localState = state
    const boardIndex = getBoardIndex(boardName)

    localState.boards[boardIndex].notes.push(note)

    Object.assign({}, state, localState)
}