const formAddTodo  = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const inputSearchTodo = document.querySelector('.form-search input')

const addTodo = inputValue => {
    if (inputValue.length) {
      todosContainer.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
         <span>${inputValue}</span>
         <i class="far fa-trash-alt" data-trash="${inputValue}"></i>
        </li>
     `
    
        event.target.reset()
    }
}

formAddTodo.addEventListener('submit', event => {
    event.preventDefault()

   const inputValue = event.target.add.value.trim()
   addTodo(inputValue)

})

const removeTodo = clickElement => {
    const trashDataValue = clickElement.dataset.trash
    const todo = document.querySelector(`[data-todo="${trashDataValue}"]`)

    const clickElement = event.target
    if (trashDataValue) {
        todo.remove()
    }
}

const filterTodos = (todos, inputValue, returnMatchedTodos) => todos 
    .filter(todo => {
        const matchedTodos = todo.textContent.toLowerCase().includes(inputValue)
        return returnMatchedTodos ? matchedTodos : !matchedTodos
    })

const maniupateClasses = (todos, classToAdd, classToRemove) => {
    todos.forEach(todo => {
        todo.classList.remove(classToRemove)
        todo.classList.add(classToAdd)
    }) 
}

const hideTodos = (todos, inputValue) => {
   const todosToHide = filterTodos(todos, inputValue, false)
   maniupateClasses(todosToHide, 'hidden', 'd-flex')
}

const showTodos = (todos, inputValue) => {
    const todosToShow = filterTodos(todos, inputValue, true)
    maniupateClasses(todosToShow, 'd-flex', 'hidden')
}

todosContainer.addEventListener('click', event => {
    const clickElement = event.target
    removeTodo(clickElement)
})

inputSearchTodo.addEventListener('input', event => {
    const inputValue = event.target.value
    const todos = Array.from(todosContainer.children)
  
    hideTodos(todos, inputValue)
    showTodos(todos, inputValue)


})