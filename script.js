const inputField = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const dateField = document.getElementById('todo-date');
const todoList = document.getElementById('todo-list');
const priorityField = document.getElementById('priority');

addButton.addEventListener('click', addTodo);

function addTodo() {
    const todoText = inputField.value;
    const todoDate = dateField.value;
    const priority = priorityField.value;

    if (todoText === '') {
        alert('Please write something to do.');
        return;
    }
    if( priority === ''){
        alert('Please select a priority.');
        return;
    }



    const li = document.createElement('li');
    li.textContent = todoText;

    switch (priority) {
        case '1':
            li.style.backgroundColor = "red";
            li.setAttribute('data-priority', '1');
            break;
        case '2':
            li.style.backgroundColor = "orange";
            li.setAttribute('data-priority', '2');
            break;
        case '3':
            li.style.backgroundColor = "green";
            li.setAttribute('data-priority', '3');
            break;
        default:
            li.style.backgroundColor = "white";
            li.setAttribute('data-priority', '4');
    }

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


    sortedList();

    inputField.value = '';
    dateField.value = '';
    priorityField.value = '';
    function sortedList() {
        const items = Array.from(todoList.getElementsByTagName('li'));
        items.sort((x, y) => {
            return x.getAttribute('data-priority') - y.getAttribute('data-priority');
        });
        todoList.innerHTML = '';
        items.forEach(item => todoList.appendChild(item));

    }
}
