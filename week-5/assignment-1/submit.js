function infoForm(){
    var firstName = document.getElementById("fname").value,
        lastName = document.getElementById("lname").value,
        ageValue = document.getElementById("age").value;
    alert("First name: " + firstName + "\n Last name: " + lastName + "\n Age: " + ageValue);
    var formReset = document.getElementById("form").reset();   
};