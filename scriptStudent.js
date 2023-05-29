
/* 2. Para vincular frontend y backend en ESTUDIANTE Método: POST
Objetivo: Que me permita enviar los datos ingresados al formulario y se envíe la información a la BD al dar clic en guardar 
End Point: GET – Users OK /  POST - Videos  OK   / //

QUE FALTA: Vincular front con la base de datos - Front 25/05/2023*/ 

// Para que me TRAIGA el NOMBRE a los campos nombre líder y correo líder en la pantalla ESTUDIANTE - GET user:

let nameLeader = document.getElementById('name-leader')
if (nameLeader != null) {
  var param = getUrlParams(parent.document.URL);

  fetch("https://team-7-back.onrender.com/api/users/" + param.email, { // traer informacion
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
  .catch((error) => console.log('Solicitud fallida',(error)));//(error) => alert('Ingrese un correo válido y seleccione un rol')); // imprime en consola el error si falla algo
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
if (containerVideo != null) {
  containerVideo.addEventListener('click',function(e){
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
    const response = await fetch('https://team-7-back.onrender.com/api/videos/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        
      },
      body: JSON.stringify(videoData)
    }).then((response) => response.json()) // convierte datos en json
    .then((response) => {console.log(JSON.stringify(response))
    if (response.status.json("User created")) {
        console.log('Video enviado correctamente');
      } else {
        console.log('Error al enviar el video');
      }
    }) // imprime en consola la respuesta en formato json
    .catch((error) => console.log(error)); // imprime en consola el error si falla algo;
    
  } catch (error) {
    console.log('Error de conexión:', error);
  }
}

//validaciones 

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