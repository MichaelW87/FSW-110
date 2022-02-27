function bakery() {
    var firstName = document.getElementById("fname").value;
    var lastName =document.getElementById("lname").value;
    var age = document.getElementById("age").value;
    var eventV = document.form1.event.value;
        console.log(eventV);
    var box = document.getElementById("selc");
    var food = [];
    var boxes = document.querySelectorAll("input[name=cake]:checked");
    for(var i = 0; i < boxes.length; i++){
        food.push(boxes[i].value);
    };

alert("First Name: " + firstName
+ "\n Last Name: " + lastName
+ "\n Age/Years: " + age
+ "\n Event: " + eventV
+ "\n Cake Selection: " + box.options[box.selectedIndex].value
+ "\n Cake Flavor/Frosting: " + food);
};