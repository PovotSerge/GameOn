function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground") // div containeur modale window
const modalBtn = document.querySelectorAll(".modal-btn") // bouton je m'inscris
const formData = document.querySelectorAll(".formData") // div containeur pour touts les input radio
const btnSubmit = document.querySelector('.btn-submit') // input bouton C'est parti
const close = modalbg.querySelector('.close')
const modalBoby = document.querySelector('.modal-body')
const btnClose = document.querySelector('.btn-close')
//const finFormTitle = document.querySelector('.fin-formulaire-tite')


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))

// launch modal form
function launchModal() {
  modalbg.style.display = "block"

  close.addEventListener('click', () => {
    modalbg.style.display = "none"
  })
}

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault()
  let change = true

  if (checkFirstName() == false) {
    change = false
  }
  if (checkLastName() == false) {
    change = false
  }
  if (checkCounter() == false) {
    change = false
  }
  if (checkEmail() == false) {
    change = false
  }
  if (checkRadio() == false) {
    change = false
  }
  if (conditionsGeneral() == false) {
    change = false
  }

  if (change == true) {
    modalBoby.innerHTML = '<div class="fin-formulaire-title">Thank you for submitting your registration details </div>'
    btnClose.style.display = 'block'
  }

})


btnClose.addEventListener('click', () => {
  modalbg.style.display = "none"
})

function checkFirstName() {
  const firstName = document.querySelector('#first').value
  if (firstName.length < 2) {
    document.querySelector('#first').classList.add('error')
    document.querySelector('.alert-input').classList.remove('invisible')
    return false
  } else {
    document.querySelector('#first').classList.remove('error')
    document.querySelector('.alert-input').classList.add('invisible')
  }
  return true
};

function checkLastName() {
  const lastName = document.querySelector('#last').value
  if (lastName.length < 2) {
    document.querySelector('#last').classList.add('error1')
    document.querySelector('.alert-input1').classList.remove('invisible')
    return false
  } else {
    document.querySelector('#last').classList.remove('error1')
    document.querySelector('.alert-input1').classList.add('invisible')
  }
  return true
}

function checkCounter() {
  const quantityGameOn = document.querySelector('#quantity').value
  if (quantityGameOn == -1) {
    document.querySelector('#quantity').classList.add('error2')
    document.querySelector('.alert-input2').classList.remove('invisible')
    return false
  } else {
    document.querySelector('#quantity').classList.remove('error2')
    document.querySelector('.alert-input2').classList.add('invisible')
  }
  return true
}

function checkEmail() {
  const inputEmail = document.querySelector('#email')
  if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(inputEmail.value) == false) {
    //console.log('true');
    document.querySelector('#email').classList.add('error3')
    document.querySelector('.alert-input-email').classList.remove('invisible')
    return false
  } else {
    document.querySelector('#email').classList.remove('error3')
    document.querySelector('.alert-input-email').classList.add('invisible')
  }
  return true
}

function checkRadio() {
  const checkBoxRadio = document.querySelectorAll('input[type=radio]')
  let checkRadio = false

  for (let i = 0; i < checkBoxRadio.length; i++) {
    if (checkBoxRadio[i].checked) {
      checkRadio = true

    }
  }
  if (checkRadio === true) {
    document.querySelector('.alert-input-radio').classList.add('invisible')
  } else {
    document.querySelector('.alert-input-radio').classList.remove('invisible')
    return false
  }
  return true
}

function conditionsGeneral() {
  const checkCondition = document.getElementById('checkbox1')
  if (checkCondition.checked == false) {
    document.querySelector('.alert-conditions').classList.remove('invisible')
    return false
  } else {
    document.querySelector('.alert-conditions').classList.add('invisible')
  }
  return true
}