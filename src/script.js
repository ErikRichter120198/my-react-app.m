document.getElementById('add-task').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') return;

    const taskList = document.getElementById('task-list');
    const newTask = document.createElement('div');
    newTask.classList.add('task');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    newTask.appendChild(taskSpan);

    const actionsSpan = document.createElement('span');
    actionsSpan.classList.add('actions');

    const jaSpan = document.createElement('span');
    jaSpan.textContent = 'JA';
    jaSpan.classList.add('ja');
    actionsSpan.appendChild(jaSpan);

    const neinSpan = document.createElement('span');
    neinSpan.textContent = 'NEIN';
    neinSpan.classList.add('nein');
    actionsSpan.appendChild(neinSpan);

    newTask.appendChild(actionsSpan);
    taskList.appendChild(newTask);

    document.getElementById('new-task').value = '';
});
