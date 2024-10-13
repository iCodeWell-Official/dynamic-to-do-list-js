// Setup Event Listener for Page Load:

document.addEventListener('DOMContentLoaded', () => {
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }
    
    // Adjust `addTask` to optionally save tasks to avoid duplication when loading from Local Storage
    function addTask(taskText, save = true) {
        // Task creation logic remains the same
    
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // Select DOM Elements:
    
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask Function:

    function addTask () {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task first!');
        } else {

            // Task Creation and Removal:

            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.classList.add('remove-btn');

            removeBtn.addEventListener('click', () => {
                taskList.removeChild(listItem);
            })
            listItem.appendChild(removeBtn);
            taskList.appendChild(listItem);
            taskInput.value = '';
        }
    }

    // Attach Event Listeners:

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === "Enter") {
            addTask ();
        }
    });
})