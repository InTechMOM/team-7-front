/* 1. Para vincular frontend y backend en LOGIN Método: GET
Objetivo: Que me permita acceder a las pantallas (estudiante/docente) con el correo y el rol que se encuentran en la base de datos si no está en la BD o se coloca un rol que no corresponde me genere un mensaje: usuario no válido.
End point: GET – Users Ok

QUE FALTA:  URL DEFINITIVA asociarla al código - Karen  25/05/2023*/ 

//FUNCIÓN LOGIN a pantalla docente y estudiante
//Objetivo: Que cuando ingrese un correo electrónico cualquiera y de clic en un rol me dirija a la pantalla correspondiente:

let loginForm = document.getElementById('login-form')
if (loginForm != null) {loginForm.addEventListener('submit',function(e) 
    {e.preventDefault();
    
    const email = document.getElementById('email').value; /* Obtiene los valores del formulario*/
    const role = document.querySelector('input[name="role"]:checked');
  
    if (isValidEmail(email) && role) {      /*verifica el correo y rol y redirige*/
  
    fetch("https://team-7-back.onrender.com/api/users/"+email, { // traer informacion del API
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

    function isValidEmail(email) {     /*para verificar el formato de correo electrónico*/
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);}
