document.getElementById('Adicionar-Tarefa').addEventListener('click', function() {
    const taskText = document.getElementById('Nova Tarefa').value;
    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(removeBtn);
    document.getElementById('Tarefas').appendChild(li);

    document.getElementById('Nova Tarefa').value = '';
});
