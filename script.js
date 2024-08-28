const inputField = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const dateField = document.getElementById('todo-date');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', addTodo);

function addTodo() {
    const todoText = inputField.value;
    const todoDate = dateField.value;

    if (todoText === '') {
        alert('Please write something to do.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = todoText;

    if (todoDate) {
        const dateSpan = document.createElement('span');
        dateSpan.textContent = ` (Datum: ${new Date(todoDate).toLocaleDateString()})`;
        li.appendChild(dateSpan);
    }

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        todoList.removeChild(li);
    });

    li.appendChild(deleteButton);
    todoList.appendChild(li);

    inputField.value = '';
    dateField.value = '';
}
