const pass = document.querySelector('#password')
const conf = document.querySelector('#confirm')

function validatePassword(){
  if(pass.value != conf.value) {
    conf.setCustomValidity("Passwords Don't Match");
  } else {
    conf.setCustomValidity('');
  }
}

pass.onchange = validatePassword;
conf.onkeyup = validatePassword;