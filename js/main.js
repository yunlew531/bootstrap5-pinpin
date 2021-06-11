const loginBtn = document.querySelector('#login');
const emailInput = document.querySelector('#login-email');
const passwordInput = document.querySelector('#login-password');
const loginModal = document.querySelector('#login-modal');
const loginForm = document.querySelector('#login-form');
const orderSubmitBtn = document.querySelector('#order-submit-btn');
let orderSubmitInputs = document.querySelectorAll('[data-validate="order-submit"]');
orderSubmitInputs = [ ...orderSubmitInputs ];
const submitEmailInput = document.querySelector('#submit-email');
const submitTelInput = document.querySelector('#submit-tel');


const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

loginModal.addEventListener('hidden.bs.modal', resetLoginForm);
loginBtn.addEventListener('click', login);
orderSubmitBtn.addEventListener('click', submitOrder);


function login(e) {
  e.preventDefault();
  const hasError = validateLogin();
  if (hasError) return;
  loginBtn.classList.add('disabled');
  console.log('傳送登入請求...');
  setTimeout(() => {
    loginBtn.classList.remove('disabled');
    alert('登入失敗!');
  }, 2000);
}

function validateLogin() {
  let isError = false;
  const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (emailRegex.test(emailInput.value)) {
    emailInput.classList.remove('is-invalid');
    emailInput.classList.add('is-valid');
  } else {
    emailInput.classList.add('is-invalid');
    emailInput.classList.remove('is-valid');
    isError = true;
  }
  if (passwordInput.value) {
    passwordInput.classList.remove('is-invalid');
    passwordInput.classList.add('is-valid');
  } else {
    passwordInput.classList.add('is-invalid');
    passwordInput.classList.remove('is-valid');
    isError = true;
  }
  return isError;
}

function submitOrder(e) {
  e.preventDefault();
  const hasError = validateSubmitOrder();
  if (hasError) return;
  orderSubmitBtn.classList.add('disabled');
  console.log('送出請求...');
  setTimeout(() => {
    orderSubmitBtn.classList.remove('disabled');
    alert('登入失敗!');
  }, 2000);
}

function validateSubmitOrder() {
  const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const telRegex = /^09[0-9]{8}$/;
  
  let isError = false;
  orderSubmitInputs.forEach((el => {
    if (el.value) {
      el.classList.remove('is-invalid');
      el.classList.add('is-valid');
    } else {
      el.classList.add('is-invalid');
      el.classList.remove('is-valid');
      isError = true;
    }
    if (emailRegex.test(submitEmailInput.value)) {
      submitEmailInput.classList.remove('is-invalid');
      submitEmailInput.classList.add('is-valid');
    } else {
      submitEmailInput.classList.add('is-invalid');
      submitEmailInput.classList.remove('is-valid');
      isError = true;
    }
    if (telRegex.test(submitTelInput.value)) {
      submitTelInput.classList.remove('is-invalid');
      submitTelInput.classList.add('is-valid');
    } else {
      submitTelInput.classList.add('is-invalid');
      submitTelInput.classList.remove('is-valid');
      isError = true;
    }
  }));
  return isError;
}

function resetLoginForm() {
  loginForm.reset();
  emailInput.classList.remove('is-valid', 'is-invalid');
  passwordInput.classList.remove('is-valid', 'is-invalid');
}