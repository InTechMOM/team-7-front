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


/*FUNCIÓN LOGIN a pantalla docente y estudiante*/

document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Obtiene los valores del formulario
  const email = document.getElementById('email').value;
  const role = document.querySelector('input[name="role"]:checked').value;

  // Verifica el correo y rol y redirige
  if (email === 'anavergara05@gmail.com' && role === 'estudiante') {
    window.location.href = './estudiantepantalla1.html'; // Redirige a la página del estudiante
  } else if (email === 'anavergara05@gmail.com' && role === 'docente') {
    window.location.href = 'docente.html'; // Redirige a la página del docente
  } else {
    alert('El correo o el rol son incorrectos');
  }
});
