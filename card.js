function setFormMessage(formElement, message) {
    //message element is selecting the error message using class formMessage where we want the error message to display
    const messageElement = formElement.querySelector(".formMessage");


    //below we will be setting the error message
    messageElement.textContent = message;


    //below we will be adding a class that contains how we want the error message to displace, reference  css file
    messageElement.classList.add("formMessageError");
}



//below we are adding an event listener like the name implies we want to do something when a form is submitted 
document.addEventListener("submit", e =>{
    e.preventDefault();
    var name = e.target[0].value;
    var email = e.target[1].value;
    var phone = e.target[2].value;
    var login = document.getElementById("form");
    const error = document.getElementById("error");
    if(name == ""){
        setFormMessage(login, "Name needs to be filled out")
        return;
    }
    if(name.length !== 3){
        setFormMessage(login, "Name needs to be atleast 3 Characters")
        return;
    }
     if(email == ""){
        setFormMessage(login, "Email needs to be filled out")
        return;
    } 
    if(!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email)){
        setFormMessage(login , "must be an email \n Example: jane@doe.com")
        return;
    } 
    if(phone == ""){
        setFormMessage(login,"Phone number needs to be filled out")
        return;
    }
    if(!/^[0-9]{10}$/.test(phone) && phone.length !== 10){
        setFormMessage(login, "Phone Number must be 10 digits" )
        error.style.display = "contents";
        return;
    }else{
    
    error.style.display = "none";
    }

    var child = document.createElement("div");
    child.classList.add("card");
    child.innerHTML = `<div>
                        <h3> Name: ${name}</h3>
                        <h3> Email: ${email}</h3>
                        <h3> Phone: ${phone}</h3>
                        </div>`
    document.getElementById("container").appendChild(child) 
})
