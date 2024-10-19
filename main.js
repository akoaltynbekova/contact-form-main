const form  = document.getElementById('form');

//ERROR HANDLING
const errorName = document.querySelector('.error-name');
const errorSurname = document.querySelector('.error-surname');
const errorEmail = document.querySelector('.error-email');
const errorMessage = document.querySelector('.error-message');
const errorQuery = document.querySelector('.error-query');
const errorConsent = document.querySelector('.error-consent');


const firstName = document.getElementById('name');
const lastName = document.getElementById('surname');
const email = document.getElementById('email');
const radios = document.getElementsByName("query-type");
const message = document.getElementById('user-message');
const consent = document.getElementsByName('terms-condition');

const successMessage = document.querySelector('.popup-message');
const submit = document.getElementById('submit');



//validate input from 'firstName, lastName, message'
const inputValidate = () => {
  let valid = true;

  if(firstName.value === ""){
    firstName.classList.add('error-border')
    errorName.style.display = 'block';
    valid = false;
  }
  if(lastName.value === ""){
    lastName.classList.add('error-border')
    errorSurname.style.display = 'block';
    vaild = false;
  }
  if(email.value === ""){
    email.classList.add('error-border')
    errorEmail.style.display = 'block';
    valid = false;
  }
  if(message.value === ""){
    message.classList.add('error-border')
    errorMessage.style.display = 'block';
    valid = false;
  }

  setTimeout(() => {
    firstName.classList.remove('error-border')
    lastName.classList.remove('error-border')
    email.classList.remove('error-border')
    message.classList.remove('error-border')

    errorName.style.display = 'none'
    errorSurname.style.display = 'none'
    errorEmail.style.display = 'none'
    errorMessage.style.display = 'none'

  },3000)

  return valid;
}

//validate query type
const queryValidate = () => {
  let valid = false;

  for(let i = 0; i < radios.length; i++){
    if(radios[i].checked){
      valid = true;
      break;
    }
  }

  if(!valid){
    errorQuery.style.display = 'block';
  }
  setTimeout(() => {
    errorQuery.style.display = 'none';
  }, 3000);

  return valid;
}

//validate checkbox from T&Cs
const checkboxValidate = () => {
  let valid = false;

  for(let i = 0; i < consent.length; i++){
    if(consent[i].checked){
      valid = true;
      break
    }
  }

  if(!valid){
    errorConsent.style.display = 'block'
  }
  setTimeout(() => {
    errorConsent.style.display = 'none'
  },3000);

  return valid;
}

const clearForm = () => {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  message.value = "";

  for(let i = 0; i < radios.length; i++){
    radios[i].checked = false;
  }

  for(let i = 0; i < consent.length; i++){
    consent[i].checked = false;
  }
}

function collect(){
  const isInputValid = inputValidate();
  const isQueryValid = queryValidate();
  const isCheckboxValid = checkboxValidate();

  if (isInputValid && isQueryValid && isCheckboxValid) {
    successMessage.style.display = 'block';
    clearForm();

    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 3000);
  }

}

form.addEventListener('submit', (e)=> {
  e.preventDefault();
  collect();
});