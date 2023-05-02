/*DOCENTE:interactividad de los círculos*/


const circles = document.querySelectorAll(".circle");

circles.forEach((circle) => {
  circle.addEventListener("click", () => {
    circles.forEach((c) => c.classList.remove("active"));
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
