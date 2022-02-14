function add(a, b){
    var c = +a + +b;
    return c;
}

var addButton = document.getElementById("addButton");
addButton.addEventListener("click", function(){
    var add1 = document.getElementById('add1').value;
    var add2 = document.getElementById('add2').value;
    var c = add(add1, add2);
    var total = document.getElementById('total');
    total.textContent = "Your answer is: " + c;
});

function sub(a, b){
    var c = +a - +b;
    return c;
}

var subButton = document.getElementById("subButton")
subButton.addEventListener("click", function(){
    var sub1 = document.getElementById("sub1").value;
    var sub2 = document.getElementById("sub2").value;
    var c = sub(sub1,sub2);
    var total = document.getElementById("total");
    total.textContent = "Your answer is: " + c;
});

function multiply(a, b) {
    var c = a * b;
    return c;
}

var multiButton = document.getElementById('multiButton');
multiButton.addEventListener('click', function(){
    var multi1 = document.getElementById('multi1').value;
    var multi2 = document.getElementById('multi2').value;
    var c = multiply(multi1, multi2);
    var total = document.getElementById('total');
    total.textContent = "Your answer is: " + c;
});

function divide(a, b) {
    var c = a / b;
    return c;
}

var diviButton = document.getElementById('diviButton');
diviButton.addEventListener('click', function(){
    var divi1 = document.getElementById('divi1').value;
    var divi2 = document.getElementById('divi2').value;
    var c = divide(divi1, divi2);
    var total = document.getElementById('total');
    total.textContent = "Your answer is: " + c;
});
