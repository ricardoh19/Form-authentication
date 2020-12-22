let submit = document.getElementById("submit")



submit.addEventListener('click',(event)=>{
    let username_form =  document.getElementById("username").value;
    let password_form = document.getElementById("password").value;
    let retype_password_form = document.getElementById("retype_password").value;
    let feedback = document.getElementById("feedback");

    if (username_form.length >= 5){
        console.log("correct");
        feedback.textContent = "";
    }
    else if (username_form.length < 5){
        console.log("False");
        feedback.textContent = "Username too short. Atleast 5 characters.";
    }
    if (password_form.length != 0 && password_form == retype_password_form){
        console.log("Passwords match");
    }else if(password_form.length == 0 || password_form != retype_password_form){
        console.log("No password given.")
        feedback.textContent += "No password given or passwords don't match.";

    }if(username_form.length >= 5 && password_form.length != 0 && password_form == retype_password_form){
        alert("Registration successful");
    }
    
    event.preventDefault();
    username.value='';
    password.value ='';
    retype_password.value='';
    
})
