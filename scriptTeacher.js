
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


// Obtener los valores de los campos de entrada
  const nameFullStudent = document.getElementById('userName').value;
  const url = document.getElementById('URL').value;
  const collaboration = document.getElementById('colaborationNote').value;
  const communication = document.getElementById('comunicationNote').value;
  const criticalThinking = document.getElementById('criticalThinkingNote').value;
  const creativity = document.getElementById('creativityNote').value;


let URL = document.getElementById('URL');
if (URL != null) {
  var param = getUrlParams(parent.document.URL);
  fetch("https://team-7-back.onrender.com/api/videos/" + param.emailTeacher, { // traer informacion
  method: "GET",
  headers: {
    "Accept":"application/json", // tipo de dato json siempre debe ir
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*' // para quitar error corse- julio ruiz
  },})
  .then((response) => response.json()) // convierte datos en json
  .then((response) => {
    if (response.emailTeacher != null){
      URL.value = response.nameStudent
      document.getElementById('email-student').value = response.url}}) // imprime en consola la respuesta en formato json
  .catch((error) => console.log('Solicitud fallida',(error)));//(error) => alert('Ingrese un correo válido y seleccione un rol')); // imprime en consola el error si falla algo
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


