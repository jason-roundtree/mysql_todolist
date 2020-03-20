const input = document.querySelector('input');
const form = document.querySelector('form');
const list = document.querySelector('ul');

form.addEventListener('submit', e => {
    console.log('submit!')
    e.preventDefault();
    const todo = {
        description: input.value
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
    })
    .catch(err => console.log('fetch err: ', err));
}

list.addEventListener('click', e => {
    const todoId = e.target.parentElement.id
    console.log('target: ', todoId)
    const className = e.target.className
    if (className === 'delete') {
        deleteTodo(todoId)
    } else if (className === 'completed') {
        console.log('completed ran')
        updateTodo(todoId, 'completed', 'TRUE')
    }
})

