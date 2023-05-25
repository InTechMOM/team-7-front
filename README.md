Título del proyecto: PLATAFORMA  ACADEMICA  EDVISTO

Objetivo

Esta plataforma tiene como objetivo permitirle al estudiante presentar evidencias académicas de tipo video ingresando una URL y al profesor permitirle visualizar dicho video y calificarlo. Cada uno interactúa en un módulo de inicio de sesión donde ingresan su correo electrónico y su rol.

Descripción

Al ingresar con el rol del estudiante se encuentra con un campo llamado nombre del estudiante y correo los cuales se traen automáticamente por el método GET llamando a la base de datos del servidor dicha información, luego encuentra el campo email del profesor, pegar URL, título del proyecto y descripción del proyecto, una vez tenga la información diligenciada clic en el botón guardar y toda la información será enviada a la base de datos del servidor por el método POST, en la interfaz encuentra el botón cerrar sesión para volver al módulo de iniciar sesión.

Al ingresar con el rol del estudiante se encuentra con un SELECT donde encontrará los estudiantes que se encuentran pendientes por calificar la evidencia del video gracias al método GET, le permite seleccionar uno de ellos y se visualizará la URL que cargó el estudiante previamente, al dar clic sobre este el docente podrá ver la evidencia para proceder con la calificación del mismo dando clic en unos de los círculos de la BARRA DE CALIFICACIONES del 20% al 100% enviando esta información a la base de datos del servidor por el método POST une  luego encuentra el módulo de habilidades para proceder con la calificación.


