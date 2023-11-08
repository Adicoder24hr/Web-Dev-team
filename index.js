let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formsection = document.querySelector(".form-section");

signup.addEventListener("click", () =>{
    slider.classList.add("moveslider");
    formsection.classList.add("form-section-move");
});

login.addEventListener("click", () =>{
    slider.classList.remove("moveslider");
    formsection.classList.remove("form-section-move");
})


function validateform(){
    let x = document.forms["mylogin"]["MyEmail"].value;
    if(x == ""){
        alert("Email must be filled");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(x)) {
        alert("Please enter a valid email address");
        return false;
    }

    let y = document.forms["mylogin"]["MyPassword"].value;
    if(y == ""){
        alert("Password must be filled");
        return false;
    }

//    else if(y.length < 6){
//         alert("The password should be atleast 6 characters long");
//         return false;
//     }

    else if(isNaN(y) || y.length > 6 || y.length <6){
        alert("invalid Password!");
        return false
    }
    return true
}

function signupValidate(){
    let z = document.forms["mysignup"]["Name"].value;
    let namepattern = /^[A-Za-z]+$/;
    if(z == ""){
        alert("Name must be entered!");
        return false;
    }
    else if(!namepattern.test(z)){
        alert("only characters should be entered in name!");
        return false
    }

    let a = document.forms["mysignup"]["Email"].value; // Use 'a' instead of 'x'
    if (a === "") {
        alert("Email must be filled");
        return false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(a)) { // Use 'a' instead of 'x'
        alert("Please enter a valid email address");
        return false;
    }

    let b = document.forms["mysignup"]["Pass"].value;
    if(b == ""){
        alert("Password must be filled");
        return false;
    }

    else if (b.length !== 6) {
        alert("Password should be exactly 6 characters long");
        return false;
    }
    else if(isNaN(b)){
        alert("Inavlid password!");
        return false;
    }

    let c = document.forms["mysignup"]["confirm"].value;
    if(c == ""){
        alert("Confirm Password must be filled");
        return false;
    }

    else if (c !== b) {
        alert("Password doesn't match!");
        return false;
    }
    else if(isNaN(c)){
        alert("Inavlid password!");
        return false;
    }
    return true

}
// var x = document.getElementById("LogIn");
// var y = document.getElementById("SignUp");
// var z = document.getElementById("btn");

// function SignUp(){
//     x.style.left = "-400px";
//     y.style.left = "50px";
//     z.style.left = "110px";
// }

