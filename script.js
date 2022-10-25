const form = document.getElementById('form');
const namefield = document.getElementById('namefield');
const namebox = document.getElementById('namebox')
const cardnumber = document.getElementById('cardnumber');
const numberbox = document.getElementById('numberbox')
const monthfield = document.getElementById('monthfield');
const yearfield = document.getElementById('yearfield');
const cvvfield = document.getElementById('cvvfield');
const cvvbox = document.getElementById('cvvbox');
const success = document.getElementById('success');
const button = document.getElementById ('button');




form.addEventListener('submit', e=> {
    e.preventDefault();
    validateInputs();
})





const setError = (element, message) =>{
    const inputcontrol = element.parentElement;
    const errorDisplay = inputcontrol.querySelector ('.error');

    errorDisplay.innerText = message;
    inputcontrol.classList.add('error');
    inputcontrol.classList.remove('success');
}

const setSuccess = (element) =>{
    const inputcontrol = element.parentElement;
    const errorDisplay = inputcontrol.querySelector ('.error');

    errorDisplay.innerText = '';
    inputcontrol.classList.remove('error');
    inputcontrol.classList.add('success');
}

button.addEventListener('click',changetext);

function changetext() {
    namebox.innerText = namefield.value;
    numberbox.innerText = cardnumber.value;
    monthbox.innerText = monthfield.value;
    yearbox.innerText = yearfield.value;
    cvvbox.innerText = cvvfield.value;
}


const validateInputs = () => {
    const namefieldValue = namefield.value.trim();
    const cardnumberValue = cardnumber.value.trim();
    const monthfieldValue = monthfield.value.trim();
    const yearfieldValue = yearfield.value.trim();
    const cvvfieldValue = cvvfield.value.trim();

   
    if(namefieldValue === '') {
        setError (namefield, 'please enter your name');

        if(namefieldValue === '') {
           namebox.innerText = 'JANE APPLESEED' ; 
        }
        else {
           namebox = namefieldValue.toUpperCase (); 
        }
    }
    else {
        setSuccess (namefield)
    }

    
    if(cardnumberValue === '') {
        setError (cardnumber, 'please enter your card number');

        if(cardnumberValue === '') {
            numberbox.innerText = '0000 0000 0000 0000' ;
        }
        else {
          numberbox = cardnumberValue ; 
        }
    }
    else {
        setSuccess (cardnumber)
    }

    
    if(monthfieldValue === '') {
        setError (monthfield, 'please fill');

        
    if(monthfieldValue === '') {
        monthbox.innerText = '00'
    }
    else {
        monthbox = monthfieldValue ;
    }
    }
    else {
        setSuccess (monthfield)
    }

    
    if(yearfieldValue === '') {
        setError (yearfield, 'please fill');

        if(yearfieldValue === '') {
            yearbox.innerText = '00'
        }
        else {
            yearbox = yearfieldValue
        }

    }
    else {
        setSuccess (yearfield)
    }

    
    if(cvvfieldValue === '') {
        setError (cvvfield, 'please fill');

        if(cvvfieldValue === '') {
            cvvbox.innerText = '000'
        }
        else {
            cvvbox = cvvfieldValue
        }
    }
    else {
        setSuccess (cvvfield)
    }

   
}








