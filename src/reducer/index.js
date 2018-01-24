import { moveNote, updateNoteState, updateBoardNotes } from './Functions'

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
    default:
      return state
  }
}
