var coffeeNum = document.getElementById('coffeeNum');
var bagelNum = document.getElementById('bagelNum');
var teaNum = document.getElementById('teaNum');
var price = document.getElementById('price');
var coffeeAmt = 0;
var bagelAmt = 0;
var teaAmt = 0;

coffeeNum.addEventListener('change', e => {
    coffeeAmt = parseInt(coffeeNum.value);
    if(isNaN(coffeeAmt)){
        coffeeAmt = 0;
    }
    total();
});

teaNum.addEventListener('change', e => {
    teaAmt = parseInt(teaNum.value);
    if(isNaN(teaAmt)){
        teaAmt = 0;
    }
    total();
})

bagelNum.addEventListener('change', e => {
    bagelAmt = parseInt(bagelNum.value);
    if(isNaN(bagelAmt)){
        bagelAmt =0;
    }
    total();
})

function total() {
    var totalAmt = (coffeeAmt * 11.00) + (bagelAmt * 3.00) + (teaAmt * 7.00);
    price.textContent = "Price: $" + totalAmt;
}

total();