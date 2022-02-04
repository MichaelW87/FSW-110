var nav = document.createElement('nav');
document.body.appendChild(nav);

var anchorElmnt = document.createElement('a');
anchorElmnt.setAttribute('href', '/home ');
var text = document.createTextNode('Home  ');
anchorElmnt.appendChild(text);
nav.appendChild(anchorElmnt);

var anchorElmnt1 = document.createElement('a');
anchorElmnt1.setAttribute('href', '/contact ');
var text = document.createTextNode('Contact  ');
anchorElmnt1.appendChild(text);
nav.appendChild(anchorElmnt1);

var anchorElmnt2 = document.createElement('a');
anchorElmnt2.setAttribute('href', '/about ');
var text = document.createTextNode('About  ');
anchorElmnt2.appendChild(text);
nav.appendChild(anchorElmnt2);


var h1 = document.createElement('h1');
h1.textContent = 'Creating a basic website';
document.body.appendChild(h1);

var p = document.createElement('p');
p.textContent = 'Creating paragraph content here';
document.body.appendChild(p);

var ul = document.createElement('ul');
document.body.appendChild(ul)

var list = document.createElement('li');
list.innerText = 'Maps';
ul.appendChild(list);

var list1 = document.createElement('li');
list1.innerText = 'Weapons';
ul.appendChild(list1);

var list2 = document.createElement('li');
list2.innerText = 'Items';
ul.appendChild(list2);


var foot = document.createElement('footer');
foot.setAttribute('id', 'myFooter');
document.body.appendChild(foot);

var x = document.createElement('p');
var y = document.createTextNode('This acts as the footer');
x.appendChild(y);
document.getElementById('myFooter').appendChild(x);

