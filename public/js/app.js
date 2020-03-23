const mainInput = document.querySelector('#mainInput');
const updateInput = document.querySelectorAll('.updateInput');
const form = document.querySelector('form');
const list = document.querySelector('ul');

form.addEventListener('submit', e => {
    console.log('submit!')
    e.preventDefault();
    const todo = {
        description: mainInput.value
    }
    
    fetch('/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo)
    })
    .then(res => res.json())
    .then(data => {
        console.log('post result: ', data)
        location.reload();
    })
    .catch(err => console.log('fetch err: ', err));
})

function deleteTodo(id) {
    const data = {
        id
    }
    fetch('/todos', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        console.log('DELETE result: ', data)
        location.reload();
    })
    .catch(err => console.log('fetch err: ', err));
}

function updateTodo(id, col, val) {
    const data = {
        id,
        column: col,
        value: val
    }
    fetch('/todo', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        console.log('PUT result: ', data)
        location.reload();
    })
    .catch(err => console.log('fetch err: ', err));
}

list.addEventListener('click', e => {
    const todoId = e.target.parentElement.id
    // console.log('input val: ', e.target.nextSibling)
    const className = e.target.className
    if (className === 'delete') {
        deleteTodo(todoId)
    } else if (className === 'completed') {
        updateTodo(todoId, 'completed', 1)
    } else if (className === 'update_desc') {
        const inputValue = e.target.nextElementSibling.value;
        updateTodo(todoId, 'description', inputValue)
    }
})


