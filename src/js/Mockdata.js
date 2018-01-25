let uniqueId = 0

function nextId() {
  return uniqueId++
}

const Notes = [{
  text: 'Clean the house',
  id: nextId(),
  board: 'leftBoard',
  editing: false
}, {
  text: 'Do the laundry',
  id: nextId(),
  board: 'leftBoard',
  editing: false
}, {
  text: 'Walk the dog',
  id: nextId(),
  board: 'leftBoard',
  editing: false
}, {
  text: 'Wash dishes',
  id: nextId(),
  board: 'leftBoard',
  editing: false
}, {
  text: 'Clean the car',
  id: nextId(),
  board: 'leftBoard',
  editing: false
}, {
  text: 'Update the pcs!',
  id: nextId(),
  board: 'leftBoard',
  editing: false
}, {
  text: 'Hide the PS4',
  id: nextId(),
  board: 'leftBoard',
  editing: false
}]

export default Notes