document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('input-tache');
    const addButton = document.querySelector('.btn-add');
    const taskList = document.querySelector('table');
    const removeButtons = document.querySelectorAll('.btn-remove'); // Sélectionnez tous les boutons de suppression

    // Fonction pour ajouter une nouvelle tâche
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td><input type="checkbox"><label>${taskText}</label></td>
                <td><input type="text" placeholder="Détails de la tâche"></td>
                <td><input type="date"></td>
                <td>
                    <select>
                        <option value="A faire">A faire</option>
                        <option value="En cours">En cours</option>
                        <option value="Terminée">Terminée</option>
                    </select>
                </td>
                <td>
                    <select>
                        <option value="Forte">Forte</option>
                        <option value="Moyenne">Moyenne</option>
                        <option value="Faible">Faible</option>
                    </select>
                </td>
                <td><button class="btn-remove"><box-icon type='solid' name='message-rounded-x' color="crimson"></box-icon></button></td>
            `;
            taskList.appendChild(newRow);
            taskInput.value = '';

            const deleteButton = newRow.querySelector('.btn-remove');
            deleteButton.addEventListener('click', function () {
                newRow.remove();
            });
        } else {
            alert('Veuillez entrer un nom de tâche valide.');
        }
    }

    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    
    removeButtons.forEach(function (removeButton) {
        removeButton.addEventListener('click', function () {
            const row = removeButton.closest('tr');
            row.remove();
        });
    });
});
