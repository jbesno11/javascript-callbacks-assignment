// Form validation, the process of ensuring a user's answers to a form are correct, complete, and fit within
// some specific criteria (e.g. a password having containing a number or special character), is a VERY
// important part of being a fullstack developer as it helps prevent errors, improve data accuracy, and ensures
// that no data is missing upon form completion

// Your assignment is to do the following:
// 1. Write a function called validateForm(e) where e is an 'event' variable (this is default
//    behavior for forms - feel free to call it 'event' as well)
// 2. Inside of validateForm(e), get the information of the form fields by either using querySelectors
//    or by traversing the event object and do the following checks:
//      2a. If the #name input element is empty, send an alert telling the user to enter their name
//          using the alert() method and then return false
//      2b. If the #email input element doesn't have a '@' in it, send an alert to tell them to enter
//          a proper email and then return false
//      2c. If the #password input element is empty, send an alert telling the user to enter a password
//          and return false
//      2d. If the #password input element is less than 8 characters, send an alert telling the user
//          their password must be at least 8 characters and then return false
// 3. If all of the checks pass, return true
// 4. Lastly, add an event listener onto the form (id="#userForm") that waits for
//    a 'submit' event and runs the validateForm callback function when that event happens

//Hint: When dealing with a form submission that takes an event variable as a parameter, use e.preventDefault()
//      (or event.preventDefault() depending on the name of the variable) to prevent the page
//      from refreshing when a form is submitted. Do all your checks after that line.


//this is outside the function so it only gets 
//created once to check if the red text at the bottom 
//has been added to the page
var hasErrorText = false;

function validateForm(e){

    //prevents the web page feom reloading on submit
    e.preventDefault();


    //pulls in the text to check
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const pass = document.querySelector("#password").value.trim();

    
    /*checking if i'm  pulling values in correctly
    console.log(name);
    console.log(email);
    console.log(pass); */


    //checks if text has some value in it
    if(!name){
        alert("You must enter a name!");
        hasErrorText = true;
        return false;
    }

    //checks if email has a @ and .
    if(!email.includes("@") || !email.includes(".") ){
        alert("Must use a valid email address that contains an \"@\" and \".\" ");
        hasErrorText = true;
        return false;
    }

    //checks if password has at least 8 characters in it
    if(pass.length < 8){
        alert("password must be at least 8 characters long!");
        hasErrorText = true;
        return false;
    }


    //checks if we had tripped an error and if a user enters in
    //credentals after triggering an error it will get rid of the
    //text for some reason it onlt works once
    if(hasErrorText){
        hasErrorText = false;
    document.getElementById('errorText').innerText = "";
    
    }

    //ends of validateForm
    return true;


}


//hooks the button up to buttonPress
const buttonPress = document.querySelector("#userForm");

//runs validateForm when button is pressed
buttonPress.addEventListener("submit", validateForm);