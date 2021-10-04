/* 
var fields = {

    user_fname: null, 
    user_lname: null,
    user_email: null,
    user_phone: null,
    user_message: null
};

document.addEventListener("DomContentLoaded",function()
{
    fields.user_fname = document.getElementById("user_fname");
    fields.user_lname = document.getElementById("user_lname");
    fields.user_email = document.getElementById("user_email");
    fields.user_phone = document.getElementById("user_phone");
    fields.user_message = document.getElementById("user_message");
    
})

function isNotEmpty(value) {
    if (value == null || typeof value == "undefined") return false;
    return value.length > 0;
}


function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
}

function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }
   
    return isFieldValid;
   }

function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.user_fname, isNotEmpty);
    valid &= fieldValidation(fields.user_lname, isNotEmpty);
    valid &= fieldValidation(fields.user_email, isNotEmpty);
    valid &= fieldValidation(fields.user_phone, isNotEmpty);
    valid &= fieldValidation(fields.user_message, isNotEmpty);


    return valid;
}

class User {
    constructor(fields.user_fname, fields.user_lname, fields.user_email, user_phone, user_message) {
        this.user_fname = user_fname;
        this.user_lname = user_lname;
        this.user_email = user_email;
        this.user_phone = user_phone;
        this.user_message = user_message;
    }
}

function sendContact() {

    let usr = new User(user_fname,user_lname,user_email, user_phone, user_message);

    if (isValid()) {
        alert("Thanks");

    }else{
        alert("There was an error")
        console.log(usr.user_fname);
        console.log(user_lname);
    }
} */

let itValidates = true;


function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
}

function isNumber(num) {
    return (num.length > 0) && !NaN(num);
}

function validateForm(){
    
    if (document.forms["contact-form"]["user_fname"].value == "" || null) {
        console.log("First name must be filled out");
        itValidates = false;
    }
    else{
        itValidates = true
    }
    if(document.forms["contact-form"]["user_lname"].value == "" || null){
        console.log("Last name must be filled out");
        itValidates = false;
    }else{
        itValidates = true
    }
    if(document.getElementById("user_email") == null){
        console.log('Email can\'t be empty');
        itValidates = false;
    }else{
        itValidates = true
    }
    if (document.getElementById("user_phone") == null) {
        console.log('Phone number can\'t be empty');
        itValidates = false;
    }else{
        itValidates = true
    }
    if (document.getElementById("user_message") == null) {
        console.log('Message can\'t be empty');
        itValidates = false;
    }else{
        itValidates = true
    }
    if (document.getElementById("user_email") != null && isEmail(document.getElementById("user_email").value)) {
        console.log('Correct email formatting');
        itValidates = false;
    }else{
        itValidates = true
    }
    if(isNumber(document.getElementById("user_phone") != null && document.getElementById("user_phone").value)) {
        console.log('Please enter numbers');
        itValidates = false;
    }else{
        itValidates = true
    }

    return itValidates;
}

function getItValidates(){
    return itValidates;
}
