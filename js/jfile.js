/*
$(document).ready(function(){
  $("body").fadeOut(3000);
});
*/


/*Este script es para la funcionabilidad de la galería*/
$(document).ready(function(){
  $(".elementoImagen ").hover(function(){
    var imagen = $(this).attr("src");
    //$('#divImagen').css("background-image","url("+imagen+")");
    /*Aqui cambiamos el texto del primer enlace*/
    if(imagen == 'images/noticia1.jpg')
    {
      $('.titulo_noticia').text("Se llevó a cabo taller de concientización 'Por inclusión y desarrollo, Únete'");
      $('.texto_noticia').text("El Departamento de Recursos Humanos del Campus Tijuana convocó a los trabajadores  administrativos a un taller de concientización que busca fomentar la inclusión de personas  con discapacidad en la atención...");
    }

    /*Aqui cambiamos el texto del segundo enlace*/
    if(imagen == 'images/noticia2.jpg')
    {
      $('.titulo_noticia').text("Capacitan a alumnos universitarios en metodología Kaizen");
      $('.texto_noticia').text("La Facultad de Contaduría y Administración, a través de la Coordinación de Administración de  Operaciones, realizaron el Evento Kaizen en la Universidad Autónoma del Campus Tijuana.  El principal...");
    }

    /*Aqui cambiamos el texto del segundo enlace*/
    if(imagen == 'images/noticia3.jpg')
    {
      $('.titulo_noticia').text("Inauguran III Congreso Internacional de Educación Artística");
      $('.texto_noticia').text("Con el objetivo de abordar diversas herramientas, procesos y métodos de creación artística  contemporáneas en función de su distribución en el mercado del arte actual, a partir del  análisis de las...");
    }

    $('#divImagen').fadeTo(1500, 1.0);
  });
});
