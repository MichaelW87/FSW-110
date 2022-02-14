var doc = document.createElement('div');
doc.setAttribute('id', 'divBox');
doc.style.backgroundColor = 'white';
doc.style.width = '800px';
doc.style.height = '800px';
document.body.appendChild(doc);

window.addEventListener('load', function() {
    doc.style.backgroundColor = 'black';   
});

window.addEventListener('scroll', function(){
    doc.style.backgroundColor = 'purple';
});

window.addEventListener('keypress', function(event){
    if (event.key === 'r'){
        doc.style.backgroundColor = 'red';
    }
    if (event.key === 'g'){
        doc.style.backgroundColor = 'green';
    }
    if (event.key === 'p'){
        doc.style.backgroundColor = 'purple';
    }
    if (event.key === 'y'){
        doc.style.backgroundColor = 'yellow';
    }
    if (event.key === 'b'){
        doc.style.backgroundColor = 'blue';
    }
    if (event.key === 'l'){
        doc.style.backgroundColor = 'black';
    }
});

var doc1 = document.getElementById('divBox');
doc1.addEventListener('load', myFunction);
doc1.addEventListener('mouseover', secondFunction);
doc1.addEventListener('mousedown', thirdFunction);
doc1.addEventListener('mouseup', forthFunction);
doc1.addEventListener('dblclick', fifthFunction);
doc1.addEventListener('wheel', sixthFunction);

function myFunction(){
    doc1.style.backgroundColor = 'black';
};

function secondFunction(){
    doc1.style.backgroundColor = 'green';
};

function thirdFunction(){
    doc1.style.backgroundColor = 'yellow';
};

function forthFunction(){
    doc1.style.backgroundColor = 'blue';
};

function  fifthFunction(){
    doc1.style.backgroundColor = 'red';
};

function sixthFunction(){
    doc1.style.backgroundColor = 'purple';
};
