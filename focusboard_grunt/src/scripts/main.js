(function () {
    'use strict';

    const STORAGE_KEY = 'focusboard-tasks';
    const defaultTasks = [
        { id: 1, title: 'Revisar o Gruntfile.js', category: 'Estudos', completed: true },
        { id: 2, title: 'Compilar os arquivos LESS', category: 'Desenvolvimento', completed: false },
        { id: 3, title: 'Publicar a branch do exercício', category: 'GitHub', completed: false }
    ];

    const form = document.querySelector('#task-form');
    const titleInput = document.querySelector('#task-title');
    const categoryInput = document.querySelector('#task-category');
    const taskList = document.querySelector('#task-list');
    const emptyState = document.querySelector('#empty-state');
    const progressRing = document.querySelector('#progress-ring');
    const progressValue = document.querySelector('#progress-value');
    const progressText = document.querySelector('#progress-text');
    const dateElement = document.querySelector('#current-date');
    const filterButtons = document.querySelectorAll('[data-filter]');

    let tasks = loadTasks();
    let activeFilter = 'all';

    function loadTasks() {
        const savedTasks = localStorage.getItem(STORAGE_KEY);
        return savedTasks ? JSON.parse(savedTasks) : defaultTasks;
    }

    function saveTasks() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }

    function getVisibleTasks() {
        if (activeFilter === 'pending') {
            return tasks.filter((task) => !task.completed);
        }

        if (activeFilter === 'complete') {
            return tasks.filter((task) => task.completed);
        }

        return tasks;
    }

    function updateProgress() {
        const completed = tasks.filter((task) => task.completed).length;
        const percentage = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;

        progressValue.textContent = percentage + '%';
        progressText.textContent = completed + ' de ' + tasks.length + ' tarefas concluídas';
        progressRing.style.setProperty('--progress', percentage + '%');
    }

    function createTaskElement(task) {
        const item = document.createElement('li');
        item.className = 'task' + (task.completed ? ' is-complete' : '');
        item.dataset.id = task.id;
        item.innerHTML = `
            <button class="task__check" type="button" aria-label="Alterar status da tarefa">✓</button>
            <div>
                <p class="task__title"></p>
                <p class="task__meta"></p>
            </div>
            <button class="task__remove" type="button" aria-label="Excluir tarefa">×</button>
        `;
        item.querySelector('.task__title').textContent = task.title;
        item.querySelector('.task__meta').textContent = task.category || 'Geral';
        return item;
    }

    function renderTasks() {
        const visibleTasks = getVisibleTasks();
        taskList.innerHTML = '';
        visibleTasks.forEach((task) => taskList.appendChild(createTaskElement(task)));
        emptyState.classList.toggle('is-visible', visibleTasks.length === 0);
        updateProgress();
    }

    function addTask(event) {
        event.preventDefault();
        const title = titleInput.value.trim();

        if (!title) {
            titleInput.focus();
            return;
        }

        tasks.unshift({
            id: Date.now(),
            title,
            category: categoryInput.value.trim() || 'Geral',
            completed: false
        });

        saveTasks();
        form.reset();
        titleInput.focus();
        renderTasks();
    }

    function handleTaskClick(event) {
        const taskElement = event.target.closest('.task');
        if (!taskElement) return;

        const taskId = Number(taskElement.dataset.id);

        if (event.target.closest('.task__check')) {
            tasks = tasks.map((task) => task.id === taskId
                ? { ...task, completed: !task.completed }
                : task);
        }

        if (event.target.closest('.task__remove')) {
            tasks = tasks.filter((task) => task.id !== taskId);
        }

        saveTasks();
        renderTasks();
    }

    function changeFilter(event) {
        activeFilter = event.currentTarget.dataset.filter;
        filterButtons.forEach((button) => {
            button.classList.toggle('is-active', button === event.currentTarget);
        });
        renderTasks();
    }

    function setCurrentDate() {
        dateElement.textContent = new Intl.DateTimeFormat('pt-BR', {
            weekday: 'long',
            day: '2-digit',
            month: 'long'
        }).format(new Date());
    }

    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', handleTaskClick);
    filterButtons.forEach((button) => button.addEventListener('click', changeFilter));

    setCurrentDate();
    renderTasks();
}());
