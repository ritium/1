const btnInicio = document.querySelector(".inicio");
const btnContacto = document.querySelector(".contacto");
const btnMas=document.querySelector(".mas");
const btnSum= document.getElementById("btnSum");
const btnRest= document.getElementById("btnRest");
const btnMulti= document.getElementById("btnMulti");

//Para el formulario
const form = document.getElementById("formulario");

//para la barra de navegacion
const showAlertInicio = () => {
    alert("Esta es la pagina de inicio");
}
const showAlertContacto = () => {
  alert("Esta es la pagina de contacto");
}
const showAlertMas = () => {
  alert("Esta es la pagina de mas");
}

//formulario matematico
const operationSuma = () => {
  let input1 = Number(document.querySelector(".input1").value);
  let input2 = Number(document.querySelector(".input2").value);
  let sum = input1 + input2;
  let res = document.querySelector(".res");
  res.innerHTML=`<span class="resultado"><b>${sum}</b></span>`
}
const operationResta = () => {
  let input1 = Number(document.querySelector(".input1").value);
  let input2 = Number(document.querySelector(".input2").value);
  let sum = input1 - input2;
  let res = document.querySelector(".res");
  res.innerHTML=`<span class="resultado"><b>${sum}</b></span>`
}
const operationMultiplicar = () => {
  let input1 = Number(document.querySelector(".input1").value);
  let input2 = Number(document.querySelector(".input2").value);
  let sum = input1 * input2;
  let res = document.querySelector(".res");
  res.innerHTML=`<span class="resultado"><b>${sum}</b></span>`
}

// Acciones en el formulario

const validate = (e) => {
  e.preventDefault();
  validateForm();
}

const validateEmail = (email) => {
  const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
  return regex.test(email)
}
const validateForm = () => {
  const emailInput = document.getElementById('email');
  const email = emailInput.value;
  if (!validateEmail(email)) {
    alert('Por favor ingrese un correo electrónico válido.');
  } else {
    alert('Correo electrónico enviado correctamente.');
  }
}

btnInicio.addEventListener("click", showAlertInicio);
btnContacto.addEventListener("click", showAlertContacto);
btnMas.addEventListener("click", showAlertMas );
btnSum.addEventListener("click", operationSuma);
btnRest.addEventListener("click", operationResta);
btnMulti.addEventListener("click", operationMultiplicar);
form.addEventListener("submit", validate);
