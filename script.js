const input = document.getElementById('new-item');
const list = document.getElementById('list');

function addItem() {
    const newItemText = input.value.trim();

    if (newItemText !== "") {
        const li = document.createElement('li');
        li.textContent = newItemText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = function () {
            li.remove();
        };

        li.appendChild(deleteButton);
        list.appendChild(li);

        input.value = '';
    } else {
        alert("Por favor ingrese un ítem.");
    }
}
