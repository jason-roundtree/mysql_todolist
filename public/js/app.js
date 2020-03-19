const input = document.querySelector('input');
// input.addEventListener('input', e => {
//     console.log('e: ', e)
// });
const form = document.querySelector('form')

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