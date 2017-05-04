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
      $('.titulo_noticia').text("Se llevó a cabo la segunda edición del evento Cimarrones por la niñez");
      $('.texto_noticia').text("En el marco del 60 aniversario de la máxima casa de estudios, la iniciativa estudiantil “UABC  conecta soluciones”, organizó el evento Cimarrones por la niñez, con el propósito de...");
    }

    /*Aqui cambiamos el texto del segundo enlace*/
    if(imagen == 'images/noticia2.jpg')
    {
      $('.titulo_noticia').text("Inauguran Seminario Internacional 'La economía de la nueva frontera ante la nueva realidad'");
      $('.texto_noticia').text("El doctor Juan Manuel Ocegueda Hernández, Rector de la UABC, inauguró el Seminario  Internacional 'La economía de la nueva frontera ante la nueva realidad', cuyo fin es...");
    }

    /*Aqui cambiamos el texto del segundo enlace*/
    if(imagen == 'images/noticia3.jpg')
    {
      $('.titulo_noticia').text("Inauguran XII Jornadas Internacionales “Historia, patrimonio, frontera”");
      $('.texto_noticia').text("Con el objetivo intercambiar experiencias académicas entre investigadores y alumnos sobre  las problemáticas de la historia y sobre problemáticas actuales del Noroeste de México,  como la migración...");
    }

    $('#divImagen').fadeTo(1500, 1.0);
  });
});
