/*DOCENTE:interactividad de los círculos*/

const circles1 = document.querySelectorAll(".circle-1");
const circles2 = document.querySelectorAll(".circle-2");
const circles3 = document.querySelectorAll(".circle-3");
const circles4 = document.querySelectorAll(".circle-4");

circles1.forEach((circle) => {
  circle.addEventListener("click", () => {
    circles1.forEach((c) => c.classList.remove("active"));
    circle.classList.add("active");
  });
});

circles2.forEach((circle) => {
  circle.addEventListener("click", () => {
    circles2.forEach((c) => c.classList.remove("active"));
    circle.classList.add("active");
  });
});

circles3.forEach((circle) => {
  circle.addEventListener("click", () => {
    circles3.forEach((c) => c.classList.remove("active"));
    circle.classList.add("active");
  });
});

circles4.forEach((circle) => {
  circle.addEventListener("click", () => {
    circles4.forEach((c) => c.classList.remove("active"));
    circle.classList.add("active");
  });
});





/*CUADRO DE CORREO: Límitar extensión de correo y caracteres del correo*/

function validarEmail() {
  var email = document.getElementById("email").value;
  if (email.indexOf("@") == -1) {
    alert("Por favor, ingrese una dirección de correo electrónico válida que contenga un signo @.");
    return false;
  }
}





/*FUNCIÓN LOGIN a pantalla docente y estudiante
Objetivo: Que cuando ingrese un correo electrónico cualquiera y de clic en un rol me dirija a la pantalla correspondiente*/

document.getElementById('login-form').addEventListener('submit',function(e) {
  e.preventDefault();
  
  const email = document.getElementById('email').value; /* Obtiene los valores del formulario*/
  const role = document.querySelector('input[name="role"]:checked');

  if (isValidEmail(email) && role) {      /*verifica el correo y rol y redirige*/
  if (role.value === 'estudiante') {
    window.location.href = './estudiantepantalla1.html'; //redirige a la página del estudiante
  } else if (role.value === 'docente') {
    window.location.href = 'docente.html'; //redirige a la página del docente
  }
  } else {
  alert('Ingrese un correo válido y seleccione un rol');
  }
  });

function isValidEmail(email) {     /*para verificar el formato de correo electrónico*/
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
  }




//ALERTA DESEA ENVIAR LA INFORMACIÓN en pantalla y estudiante botón enviar y guardar*/ 

function confirmarEnvio() {
  return confirm("¿Estás seguro de que deseas enviar el formulario?");
}




//Vinculación frontend y backend

/* 1. Para vincular frontend y backend en LOGIN Método: GET
Objetivo: Que me permita acceder a las pantallas (estudiante/docente) de acuerdo con el correo y el rol que se encuentran
en la base de datos si no está en la BD o se coloca un rol que no corresponde me genere un mensaje: usuario no válido
End point: GET – Users */


fetch("https://team-7-back.onrender.com/api/users", { // traer informacion
  method: "GET",
  headers: {
    "Accept":"application/json", // tipo de dato json siempre debe ir
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*' // para quitar error corse- julio ruiz
  },
})
  .then((response) => response.json()) // convierte datos en json
  .then((response) => console.log(JSON.stringify(response))) // imprime en consola la respuesta en formato json
  .catch((error) => console.log(error)); // imprime en consola el error si falla algo


/* 2. Para vincular frontend y backend en ESTUDIANTE Método: POST
Objetivo: Que me permita enviar los datos ingresados al formulario y se envíe la información a la BD al dar clic en guardar
End Point: GET – Users /  POST - Videos */


/* 3. Para vincular frontend y backend en DOCENTE Método: GET y POST
Objetivo: Que me muestre los estudiantes y la url que están pendientes por calificar para luego colocar una nota por habilidad
y al dar clic en guardar se envié la información de esas calificaciones a la base de datos 
End point: GET- video  /   POST-Calificaciones    */

fetch('https://team-7-back.onrender.com/api/users', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({ "id": 78912 })
})
   .then(response => response.json())
   .then(response => console.log(JSON.stringify(response)))
   .catch((error) => console.log(error)); // imprime en consola el error si falla algo





   
   
//validación especial:

// fetch("https://team-7-back.onrender.com/api/users", {
//   method: "POST",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ id: 78912 }),
// })
//   .then((response) => response.json())
//   .then((response) => console.log(JSON.stringify(response)));


/*julio ruiz: 

fetch("https://team-7-back.onrender.com/api/users", { // traer informacion
method: "GET",
headers: {
  Accept: "application/json", // tipo de dato json siempre debe ir
  "Content-Type": "application/json",
  'Access-Control-Allow-Origin': '*' // para quitar error corse- julio ruiz
},
})
.then((response) => response.json()) // convierte datos en json
.then((response) => console.log(JSON.stringify(response))) // imprime en consola la respuesta en formato json
.catch((error) => console.log(error)); // imprime en consola el error si falla algo */

















