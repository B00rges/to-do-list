
const formAddTodo = document.querySelector('.form-add-todo')
const todoContainer = document.querySelector('.todos-container')
const inputSearchTodo = document.querySelector('.form-search input')

formAddTodo.addEventListener('submit', event => {
    event.preventDefault()

   const inputValue = event.target.add.value.trim()

  if(inputValue.length) {
    todoContainer.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${inputValue}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>
    `  
    event.target.reset() 
  }
})

todoContainer.addEventListener('click', event => {

    const clickElement = event.target

if(Array.from(clickElement.classList).includes('delete')) {
    clickElement.parentElement.remove()
}
})


inputSearchTodo.addEventListener('input', event => {
    const inputValue = event.target.value.trim().toLowerCase()
    Array.from(todoContainer.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
        .forEach(todo => {
            todo.classList.remove('d-flex')
            todo.classList.add('hidden')
        })

    Array.from(todoContainer.children)
        .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
        .forEach(todo => {
            todo.classList.remove('hidden')
            todo.classList.add('d-flex')
        })
})