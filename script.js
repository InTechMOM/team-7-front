/*DOCENTE:interactividad de los círculos*/


let circles = document.querySelectorAll('.circle');
circles.forEach(circle => {
  circle.addEventListener('click', () => {
    circles.forEach(c => {
      c.classList.remove('active');
    });
    circle.classList.add('active');
  });
});
