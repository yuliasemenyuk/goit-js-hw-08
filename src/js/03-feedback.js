import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const formInputMail = document.querySelector('.feedback-form input');
const formInputText = document.querySelector('.feedback-form textarea');

feedbackForm.addEventListener('submit', onFormSubmit);
feedbackForm.addEventListener('input', throttle(onFormInput, 500));

const FORM_KEY = 'feedback-form-state';


const savedFormDataJSON = localStorage.getItem(FORM_KEY);
const savedFormData = JSON.parse(savedFormDataJSON);

if (savedFormData !== null) {
    formInputMail.value = savedFormData.email;
    formInputText.value = savedFormData.message;
};


function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(formInputMail.value);

    if ((formInputMail.value === '') || (formInputText.value === '')) {
        window.alert('Please, fill in the form');
        return;

    }
    
    const formData = { email: `${formInputMail.value}`, message: `${formInputText.value}` };
    console.log(formData);

    
    localStorage.removeItem(FORM_KEY);
    formInputMail.value = "";
    formInputText.value = "";
 
}


function onFormInput() {

        const formData = { email: `${formInputMail.value}`, message: `${formInputText.value}` };
        const formDataJSON = JSON.stringify(formData);
    
        localStorage.setItem(FORM_KEY, formDataJSON);
    
    }
function savingValue() {
        const savedMessage = JSON.parse(localStorage.getItem(FORM_KEY));
    
        if (savedMessage && savedMessage.message) {
            formInputText.value = savedMessage.message;
        };
        
        if (savedMessage && savedMessage.email) {
            formInputMail.value = savedMessage.email;
        };
    };
    savingValue(); 

    

    
     
