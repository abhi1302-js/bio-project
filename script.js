var Name = document.getElementsByClassName("nam").value;
var grade = document.querySelector(".class").value;
var section = document.querySelector(".section").value;
var agreement = ("I "+ Name +" of "+ grade + " " + section + " agree's to the terms and conditions of this website.")
function test() {
   document.querySelector("#agreement").textContent = agreement;
    
};
