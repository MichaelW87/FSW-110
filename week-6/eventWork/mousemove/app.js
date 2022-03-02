var coord = document.querySelector('.red-box');

coord.addEventListener('mousemove', function (e){
    coord.innerHTML = `x: ${e.x} | y: ${e.y}`;
});