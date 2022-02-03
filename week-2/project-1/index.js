var nav = document.createElement('nav');
document.body.appendChild(nav);

var anchorElmnt = document.createElement('a');
anchorElmnt.setAttribute('href', '/home');
var text = document.createTextNode('Home');
anchorElmnt.appendChild(text);
nav.appendChild(anchorElmnt);

var nav = document.createElement('nav');
document.body.appendChild(nav);

var anchorElmnt = document.createElement('a');
anchorElmnt.setAttribute('href', '/contact');
var text = document.createTextNode('Contact');
anchorElmnt.appendChild(text);
nav.appendChild(anchorElmnt);

var nav = document.createElement('nav');
document.body.appendChild(nav);

var anchorElmnt = document.createElement('a');
anchorElmnt.setAttribute('href', '/about');
var text = document.createTextNode('About');
anchorElmnt.appendChild(text);
nav.appendChild(anchorElmnt);


var h1 = document.createElement('h1');
h1.textContent = 'Creating a basic website';
document.body.appendChild(h1);

var p = document.createElement('p');
p.textContent = 'Creating paragraph content here';
document.body.appendChild(p);

var list = document.createElement('li');
list.textContent = 'Maps';
document.body.appendChild(list);

var list = document.createElement('li');
list.textContent = 'Weapons';
document.body.appendChild(list);

var list = document.createElement('li');
list.textContent = 'Items';
document.body.appendChild(list);


var foot = document.createElement('footer');
foot.setAttribute('id', 'myFooter');
document.body.appendChild(foot);

var x = document.createElement('p');
var y = document.createTextNode('This acts as the footer');
x.appendChild(y);
document.getElementById('myFooter').appendChild(x);

