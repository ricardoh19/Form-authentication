var feedback = document.getElementById("feedback");
var feedback_password = document.getElementById("feedback_password");


function chkPassword(){
    var password_form = document.getElementById("password").value;
    var retype_password_form = document.getElementById("retype_password").value;
    
    
    if (password_form.length != 0 && password_form == retype_password_form){
        return true;
    }
    else {
        alert("No password given or passwords do not match.")
        return false;

    }
    
    /*
    if(username_form.length >= 5 && password_form.length != 0 && password_form == retype_password_form){
        alert("Registration successful");
    }
    */
}

function chkUsername(){
    var username_form =  document.getElementById("username").value;

    if (username_form.length >= 5){
        return true;
    }
    else{
        alert("Username too short. Atleast 5 characters.")
        return false;
    }
}

