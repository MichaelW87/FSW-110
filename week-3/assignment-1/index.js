var greet = document.createElement('h1');
    greet.textContent = 'Hello World';
    document.body.appendChild(greet);

for (let i = 0; i < 10; i++) {
    var greet = document.createElement('h1');
    greet.textContent = 'Hello World';
    document.body.appendChild(greet);
}

const names = [
    'Steve',
    'Larry',
    'Joe',
    'Shirley',
    'Steph',
    'Nate',
    'Rick',
    'Emily',
]

for (var i = 0; i < names.length; i++) {
    var newNames = document.createElement("li");
    newNames.textContent = names[i];
    document.body.appendChild(newNames);
}