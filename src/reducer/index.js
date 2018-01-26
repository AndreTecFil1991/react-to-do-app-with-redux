import {
  changeNoteEditionState,
  updateBoardNotes,
  updateNote,
  removeNote,
  checkNote,
  addNote
} from './Functions'

export default function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_NOTE_EDITION_STATE':
      changeNoteEditionState(action.noteId, action.boardName, state)
      return state
    case 'UPDATE_BOARD_NOTES':
      updateBoardNotes(action.notes, action.boardName, state)
      return state
    case 'ADD_NOTE':
      addNote(action.boardName, action.note, state)
      return state
    case 'UPDATE_NOTE':
      updateNote(action.boardName, action.newText, action.noteId, state)
      return state
    case 'REMOVE_NOTE':
      removeNote(action.boardName, action.noteId, state)
      return state
    case 'CHECK_NOTE':
      checkNote(action.id, action.boardName, state)
      return state
    default:
      return state
  }
}
