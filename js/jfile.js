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
      $('.titulo_noticia').text("Formaliza UABC colaboración con CEITEC (República Checa)");
      $('.texto_noticia').text("Se concretó convenio de colaboración institucional entre la UABC Campus Tijuana y el  Central European Institute of Technology (CEITEC), República Checa, con el objetivo de  desarrollar...");
    }

    /*Aqui cambiamos el texto del segundo enlace*/
    if(imagen == 'images/noticia2.jpg')
    {
      $('.titulo_noticia').text("Realizan Expo UABC Niños - 2017");
      $('.texto_noticia').text("Con el objetivo de que los niños conozcan la Universidad y fomentar en ellos la idea de  estudiar una carrera universitaria, se realizó la Expo UABC Niños 2017 en la explanada...");
    }

    /*Aqui cambiamos el texto del segundo enlace*/
    if(imagen == 'images/noticia3.jpg')
    {
      $('.titulo_noticia').text("Promueven actividad del Centro Europeo de Tecnología (CEITEC-BUT) entre estudiantes");
      $('.texto_noticia').text("Con el objetivo de proporcionar información general en oportunidades de vinculación y  movilidad académica, así mismo presentar la tecnología de los centros de investigación  europeo se llevó a cabo...");
    }

    $('#divImagen').fadeTo(1500, 1.0);
  });
});
