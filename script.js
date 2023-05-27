/* 1. Para vincular frontend y backend en LOGIN Método: GET
Objetivo: Que me permita acceder a las pantallas (estudiante/docente) con el correo y el rol que se encuentran en la base de datos si no está en la BD o se coloca un rol que no corresponde me genere un mensaje: usuario no válido.
End point: GET – Users Ok

QUE FALTA:  URL DEFINITIVA asociarla al código - Karen  25/05/2023*/ 

//FUNCIÓN LOGIN a pantalla docente y estudiante
//Objetivo: Que cuando ingrese un correo electrónico cualquiera y de clic en un rol me dirija a la pantalla correspondiente:

let loginForm = document.getElementById('login-form')
if (loginForm != null) {loginForm.addEventListener('submit',function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value; /* Obtiene los valores del formulario*/
    const role = document.querySelector('input[name="role"]:checked');
  
    if (isValidEmail(email) && role) {      /*verifica el correo y rol y redirige*/
  
    fetch("https://team-7-back-demo.onrender.com/api/users/"+email, { // traer informacion del API
    method: "GET",
    headers: {
      "Accept":"application/json", // tipo de dato json siempre debe ir
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*' // para quitar error corse- julio ruiz
    },
    })
    .then((response) => response.json()) // convierte datos en json
    .then((response) => {console.log(JSON.stringify(response))
    if (response.email != null){
      if (response.rol === 'student') {
        window.location.href = './estudiante.html?email=' + email; //redirige a la página del estudiante
      } else if (response.rol === 'teacher') {
        window.location.href = 'docente.html'; //redirige a la página del docente
      }
    } else {
      alert('Ingrese un correo válido y seleccione un rol')}}) // imprime en consola la respuesta en formato json
    .catch((error) => alert('Ingrese un correo válido y seleccione un rol')); // imprime en consola el error si falla algo
  
    } else {
    alert('Ingrese un correo válido y seleccione un rol');
    }
    });
    }

function getUrlParams(urlOrQueryString) {
  if ((i = urlOrQueryString.indexOf('?')) >= 0) {
    const queryString = urlOrQueryString.substring(i+1);
    if (queryString) {
      return _mapUrlParams(queryString);
    }}
    return {};
    }

function _mapUrlParams(queryString) {
  return queryString    
    .split('&') 
    .map(function(keyValueString) { return keyValueString.split('=') })
    .reduce(function(urlParams, [key, value]) {
      if (Number.isInteger(parseInt(value)) && parseInt(value) == value) {
        urlParams[key] = parseInt(value);
      } else {
        urlParams[key] = decodeURI(value);
      }
      return urlParams;
    }, {});}





/* 2. Para vincular frontend y backend en ESTUDIANTE Método: POST
Objetivo: Que me permita enviar los datos ingresados al formulario y se envíe la información a la BD al dar clic en guardar 
End Point: GET – Users OK /  POST - Videos  OK   / //

QUE FALTA: Vincular front con la base de datos - Front 25/05/2023*/ 

// Para que me TRAIGA el NOMBRE a los campos nombre líder y correo líder en la pantalla ESTUDIANTE - GET user:

let nameLeader = document.getElementById('name-leader')
if (nameLeader != null) {
  var param = getUrlParams(parent.document.URL);

  fetch("https://team-7-back-demo.onrender.com/api/users/" + param.email, { // traer informacion
  method: "GET",
  headers: {
    "Accept":"application/json", // tipo de dato json siempre debe ir
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*' // para quitar error corse- julio ruiz
  },})
  .then((response) => response.json()) // convierte datos en json
  .then((response) => {
  if (response.email != null){
    nameLeader.value = response.nameFull
    document.getElementById('email-student').value = response.email}}) // imprime en consola la respuesta en formato json
    .catch((error) => alert('Ingrese un correo válido y seleccione un rol')); // imprime en consola el error si falla algo
  }

  function isValidEmail(email) {     /*para verificar el formato de correo electrónico*/
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);}
  



//CUADRO DE CORREO: Límitar extensión de correo y caracteres del correo:

function validarEmail() {
  var email = document.getElementById("email").value;
  if (email.indexOf("@") == -1) {
    alert("Por favor, ingrese una dirección de correo electrónico válida que contenga un signo @.");
    return false;
  }
}

//Fetch POST - Videos

/* Manejar el evento de envío del formulario
const containerVideo = document.getElementById('containerVideo');
containerVideo.addEventListener('submit-student', function (event) {
  event.preventDefault(); // Evitar que el formulario se envíe de forma tradicional */

  
let containerVideo = document.getElementById('submit-student')
if (containerVideo != null) {containerVideo.addEventListener('click',function(e) {
  
  
  if (confirm ("¿Estás seguro que deseas enviar el formulario?") == false) {
    return
  }
  e.preventDefault();

  // Obtener los valores de los campos de entrada
  const emailTeacher = document.getElementById('emailTeacher').value;
  const URL = document.getElementById('URL').value;
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const nameStudent = document.getElementById('name-leader').value;
  const emailStudent = document.getElementById('email-student').value;

  // Crear un objeto con los datos del video
  const videoData = {
    emailTeacher: emailTeacher,
    url: URL,
    title: title,
    description : description,
    nameStudent : nameStudent,
    emailStudent : emailStudent,

  };

  sendVideo(videoData); // Enviar el video al backend
});}

// Función para enviar el video al backend
async function sendVideo(videoData) {
  try {
    const response = await fetch('https://team-7-back.onrender.com/api/videos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        
      },
      body: JSON.stringify(videoData)
    }).then((response) => response.json()) // convierte datos en json
    .then((response) => {console.log(JSON.stringify(response))
      if (response.ok) {
        console.log('Video enviado correctamente');
      } else {
        console.log('Error al enviar el video');
      }
    }) // imprime en consola la respuesta en formato json
    .catch((error) => alert('Ingrese un correo válido y seleccione un rol')); // imprime en consola el error si falla algo;

    
  } catch (error) {
    console.log('Error de conexión:', error);
  }
}

/* 3. Para vincular frontend y backend en DOCENTE Método: GET y POST
Objetivo: Que me muestre los estudiantes y la url que están pendientes por calificar para luego colocar una nota por habilidad y al dar clic en guardar se envié la información de esas calificaciones a la base de datos 
End point: GET- video  /   POST-Calificaciones    */

//QUE FALTA: pendiente GET- video y POST-Calificaciones que Karen Back pendiente MERGE y cuando se solucione procede front 25/05/2023 */


/*PANTALLA DOCENTE:interactividad de los círculos*/

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

//Envío de calificaciones - POST Calificaciones

//obtener la data del formulario, por cada botón tengo una clase progressbar1.2.3.4 por id lo traigo vienen dentro de un array:


function getFormData() {
  const progressBarOne = document.getElementById("progress-bar-1")
  const progressBarTwo = document.getElementById("progress-bar-2")
  const progressBarThree = document.getElementById("progress-bar-3")
  const progressBarFour = document.getElementById("progress-bar-4")


  //luego de ese elemento que me traje voy a obtener el otro elemento por clase que tengo, y es active, uso getElementsByClassName que me trae los elementos que tenga la clase active.

  const [activeCollaboration] = progressBarOne.getElementsByClassName("active")
  const [activeComunication] = progressBarTwo.getElementsByClassName("active")
  const [activeCriticalThinking] = progressBarThree.getElementsByClassName("active")
  const [activeCreativity] = progressBarFour.getElementsByClassName("active")
  
  //y luego para que pueda acceder al contenido sobre esos active uso getAttribute que seria data index que es de los porcentajes y me los guarda en note respectivamente al final arma un objeto con eso y me los retorna.

  const colaborationNote = activeCollaboration.getAttribute("data-index")
  const comunicationNote = activeComunication.getAttribute("data-index")
  const criticalThinkingNote = activeCriticalThinking.getAttribute("data-index")
  const creativityNote = activeCreativity.getAttribute("data-index")
  
  const formattedNotes = {
    colaborationNote,
    comunicationNote,
    criticalThinkingNote,
    creativityNote,
  }
  return formattedNotes
  }


  
//ALERTA DESEA ENVIAR LA INFORMACIÓN en pantalla y estudiante botón enviar y guardar*/ 

function pregunta(){
  if (confirm('¿Estas seguro de enviar este formulario?')){
     document.tuformulario.submit()
  }
}

  //const submitButton = document.getElementById("docente-btn")  //cuando doy clic en guardar
  //submitButton.addEventListener("click", confirmarEnvio)
  
  //ALERTA DESEA ENVIAR LA INFORMACIÓN en pantalla y estudiante botón enviar y guardar
  
  /*function confirmarEnvio() {
    confirm("¿Estás seguro que deseas enviar el formulario?")
  }
  
  /*Como estaba antes 23/05/2023: 
  function confirmarEnvio() {
  return confirm("¿Estás seguro de que deseas enviar el formulario?");
  }*/




















//RECURSOS O BORRADORES DE CÓDIGO UTILIZADOS:
   
   
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


/*JULIO RUIZ: 

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


/*KAREN E

const loginResponse = fetch('https://team-7-back.onrender.com/api/users', 
{ method: 'GET'}).then((response) =>  
response.json()).then((response) => 
console.log(response))



/* Ana último 24 de mayo de 2023

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

  */

/* Ana último 25 de mayo de 2023

  /*fetch("https://team-7-back-demo.onrender.com/api/users", { // traer informacion
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
  */










