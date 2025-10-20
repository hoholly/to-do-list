const taskList = document.getElementById('tl');
const taskInput = document.getElementById('t');

function addTask()
{
    const task = taskInput.value.trim();
    if (task)
    {
        const newTask = document.createElement('li');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        
        const taskText = document.createElement('span');
        taskText.textContent = task;

        const editB = document.createElement('button');
        editB.textContent = 'Edit';
        editB.classList.add('eb');
        editB.style.display = 'none';

        const deleteB = document.createElement('button');
        deleteB.textContent = 'Delete';
        deleteB.classList.add('db');
        deleteB.style.display = 'none';

        deleteB.addEventListener('click', () => deleteTask(newTask));
        editB.addEventListener('click', () => editTask(newTask, taskText));
        
        newTask.appendChild(checkbox);
        newTask.appendChild(taskText);
        newTask.appendChild(editB);
        newTask.appendChild(deleteB);

        newTask.addEventListener('click', () => choice(editB, deleteB));

        
        taskList.appendChild(newTask);

        taskInput.value = '';
    }
}

function choice(editB, deleteB)
{
    editB.style.display = 'inline-block';
    deleteB.style.display = 'inline-block';
}

function editTask(task, taskText)
{
    const newText = prompt("Edit your task:", taskText.textContent);
    if (newText) 
    {
        taskText.textContent = newText;
    }
    task.querySelector('.editb').style.display = 'none'; // Hide edit button after edit
    task.querySelector('.deleteb').style.display = 'none'; // Hide delete button after edit
}

function deleTask()
{
    taskList.removeChild(task);
}

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && taskInput.value.trim() === '') 
    {
        const hr = document.createElement('hr');
        taskList.appendChild(hr);
    }
})

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') 
    {
        addTask();
    }
});

