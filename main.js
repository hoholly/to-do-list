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
        editB.style.display = 'none';

        const deleteB = document.createElement('button');
        deleteB.textContent = 'Delete';
        deleteB.style.display = 'none';

        deleteB.addEventListener('click', () => deleteTask(newTask));
        editB.addEventListener('click', () => editTask(newTask, taskText, editB, deleteB));
        
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

    // buttons disappear after 2 sec
    setTimeout(() => {
        editB.style.display = 'none';
        deleteB.style.display = 'none';
    }, 2000);
}

function editTask(task, taskText, editB, deleteB)
{
    const newText = prompt("Edit your task:", taskText.textContent);
    
    if (newText) 
    {
        taskText.textContent = newText; 
    }
}

function deleteTask(task)
{
    taskList.removeChild(task);
}

/*
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && taskInput.value.trim() === '') 
    {
        const hr = document.createElement('hr');
        taskList.appendChild(hr);
    }
})
*/

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') 
    {
        addTask();
    }
});

