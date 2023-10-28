function finishFunctionality(e) {
    e.preventDefault();
    if(validateForm(e)) {
        alert(`Successfully Submitted Form: \n Name: ${e.target.name.value} \n Email: ${e.target.email.value} \n Password: ${e.target.password.value}`)
    } else {
        const app = document.querySelector('.app')
        let error = document.createElement('p') 
        error.innerHTML=`<p class="error" id="errorText">There was an error submitting the form...</p>`
        app.appendChild(error);
    }
}

userForm.addEventListener('submit', finishFunctionality)


