const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
  LIST_ITEMS: 'list-items',
  CHECKED: 'checked',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let itemCount = 0
let uncheckedCount = 0

function newTodo() {
  let todo = prompt('Enter a task')
  if(todo !== "" && todo !== null) {

    list.appendChild(createLiElement(todo))

    // Increment count
    itemCountSpan.innerHTML = itemCount += 1
    uncheckedCountSpan.innerHTML = uncheckedCount += 1
  }
}

function createLiElement(todo) {
  let li = document.createElement('li')
  li.className = classNames.TODO_ITEM
  li.id = todo

  let checkbox = document.createElement('input')
  checkbox.className = classNames.TODO_CHECKBOX
  checkbox.type = 'checkbox'

  checkbox.addEventListener('click', function() {
  document.getElementById(todo).style.textDecoration = 'line-through'
  document.getElementById(todo).style.color = "#c6c6c6"
    uncheckedCountSpan.innerHTML = uncheckedCount -= 1
    checkbox.disabled = !checkbox.disabled
    checkbox.className = classNames.CHECKED
  })

  // delete button
  let deleteButton = document.createElement('button')
  deleteButton.className = 'button'
  deleteButton.id = 'delete'
  let btnTitle = document.createTextNode('Delete')
  deleteButton.appendChild(btnTitle)
  deleteButton.addEventListener('click', function() {
    var element = document.getElementById(todo)
    element.parentNode.removeChild(element)
    if (uncheckedCount > 0 && checkbox.className !== classNames.CHECKED) {
      uncheckedCountSpan.innerHTML = uncheckedCount -= 1
    }
    itemCountSpan.innerHTML = itemCount -= 1
  })

  li.appendChild(checkbox)
  li.appendChild(document.createTextNode(todo))
  li.appendChild(deleteButton)

  return li
}
