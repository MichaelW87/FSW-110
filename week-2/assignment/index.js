var newH1 = document.createElement('h1');
newH1.textContent = 'Welcome to my JS site';
document.body.appendChild(newH1);

var newP = document.createElement('p');
newP.textContent = 'All of this was created with Javascript';
document.body.appendChild(newP);

var ol = document.createElement('ol');
document.body.appendChild(ol);


var newListItem = document.createElement('li');
newListItem.innerText = 'Vangaurd';
ol.appendChild(newListItem);

var newListItem = document.createElement('li');
newListItem.innerText = 'Warzone';
ol.appendChild(newListItem);

var newListItem = document.createElement('li');
newListItem.innerText = 'Kingdom Hearts';
ol.appendChild(newListItem);