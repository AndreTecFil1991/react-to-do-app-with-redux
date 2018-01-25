import { moveNote, updateNoteState, updateBoardNotes, add, update, remove, onCheck } from './Functions'

export default function reducer(state, action) {
  switch (action.type) {
    case 'MOVE_NOTE':
      moveNote(action.search, state)
      return state
    case 'UPDATE_NOTE_STATE':
      updateNoteState(state)
      return state
    case 'UPDATE_BOARD_NOTES':
      updateBoardNotes(action.productID, action.voteType, state)
      return state
    case 'ADD':
      add(action.note, action.editing, state)
      return state
    case 'UPDATE':
      update(action.newText, action.index, state)
      return state
    case 'REMOVE':
      remove(action.index, state)
      return state
    case 'ON_CHECK':
      onCheck(action.index, state)
      return state
    default:
      return state
  }
}
