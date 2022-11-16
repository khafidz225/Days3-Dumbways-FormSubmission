const form = {
    eListener : function (id) {
        document.getElementById(id)
    },
    validate : function(listener) {
        if(listener.value == "") {
            return false ;
        }
    }
}

function submitData(){
    let name = form.eListener('name').value
    let email = form.eListener('email').value
    let number = form.eListener('number').value
    let subject = form.eListener("subject").options[form.eListener("subject").selectedIndex].value
    let message = form.eListener('message').value
    console.log(name, email, number, subject, message);
    if(!form.validate(form.eListener("name"))){
        return a();  
    } else if (!form.validate(form.eListener("email"))){
        return ab();
    }else if (!form.validate(form.eListener("number"))){
        return abc();
    }else if(!form.validate(form.eListener("subject"))){
        return abcd();
    }else if(!form.validate(form.eListener("message"))){
        return borderMessage();
    }

    let link = document.createElement('a');
    link.href = `mailto:${email}?subject=${subject}&body=Hallo nama saya ${name}, ${message}, silahkan kontak saya di ${number}`
    link.click()
}

function a(){
    borderName()
    borderEmail()
    borderNumber()
    borderSubject()
    borderMessage()
}
function ab(){
    borderEmail()
    borderNumber()
    borderSubject()
    borderMessage()
}
function abc(){
    borderNumber()
    borderSubject()
    borderMessage()
}
function abcd(){
    borderSubject()
    borderMessage()
}



function borderName(){
    let border = document.querySelector('.border-name');
    border.classList.remove('border-name')
    
    let nameText = document.querySelector('.name-text');
    nameText.classList.remove('name-text')
}
function addClassName(){
    let nameBorder = document.querySelector('.name-border')
    nameBorder.classList.add('border-name')
    
    let nameText = document.querySelector('.namejs');
    nameText.classList.add('name-text')
}


function borderEmail(){
    let border = document.querySelector('.border-email');
    border.classList.remove('border-email')
    
    let emailText = document.querySelector('.email-text');
    emailText.classList.remove('email-text')
}
function addClassEmail(){
    let emailBorder = document.querySelector('.email-border')
    emailBorder.classList.add('border-email')
    
    let emailText = document.querySelector('.emailjs');
    emailText.classList.add('email-text')
}


function borderNumber(){
    let border = document.querySelector('.border-number');
    border.classList.remove('border-number')
    
    let numberText = document.querySelector('.number-text');
    numberText.classList.remove('number-text')
}
function addClassNumber(){
    let numberBorder = document.querySelector('.number-border')
    numberBorder.classList.add('border-number')
    
    let numberText = document.querySelector('.numberjs');
    numberText.classList.add('number-text')
}


function borderSubject(){
    let border = document.querySelector('.border-subject');
    border.classList.remove('border-subject')
    
    let subjectText = document.querySelector('.subject-text');
    subjectText.classList.remove('subject-text')
}
function addClassSubject(){
    let subjectBorder = document.querySelector('.subject-border')
    subjectBorder.classList.add('border-subject')
    
    let subjectText = document.querySelector('.subjectjs');
    subjectText.classList.add('subject-text')
}

function borderMessage(){
    let border = document.querySelector('.border-message');
    border.classList.remove('border-message')
    
    let messageText = document.querySelector('.message-text');
    messageText.classList.remove('message-text')
}
function addClassMessage(){
    let messageBorder = document.querySelector('.message-border')
    messageBorder.classList.add('border-message')
    
    let messageText = document.querySelector('.messagejs');
    messageText.classList.add('message-text')
}