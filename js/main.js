let createBox = document.getElementsByClassName('createBox')[0];
let notes = document.getElementsByClassName('notes')[0];
let input = document.getElementById('userInput');

document.getElementById('create').addEventListener('click', function () {
    createBox.style.display = 'block';
});

createBox.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) { 
        createNote(input.value);
        input.value = "";
        createBox.style.display = 'none';
    }
});

function createNote(text) {
    let div = document.createElement('div');
    div.className = 'note';

    let details = document.createElement('div');
    details.className = "details";
    let title = document.createElement('h3');
    title.textContent = text;

    details.appendChild(title);
    div.appendChild(details);

    let randomColor = generateRandomColor();
    div.style.backgroundColor = randomColor;

    div.addEventListener('dblclick', function () {
        if (confirm('Are you sure you want to delete this note?')) {
            div.remove();
        }
    });

    notes.appendChild(div);
}


function generateRandomColor() {
    let colorList = ['#c2ff3d', '#615EFC', "#15F5BA", '#ff3de8', '#3dc3ff', "#04e022", "#bc83e6", '#ebb328'];
    let randomIndex = Math.floor(Math.random() * colorList.length);
    return colorList[randomIndex];
}
