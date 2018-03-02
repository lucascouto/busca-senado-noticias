

$(document).ready(function(){


  new Selectr('#multiple', {
    multiple: true,
    placeholder: "Selecionar tags",
    clerable: false
  });

  $(document).on('click', '#linkBuscaAvancada', function(){ 
    $('#buscaAvancada').slideToggle(400)
    var text = $('#linkBuscaAvancada').text();
    $('#linkBuscaAvancada').text(text == 'Filtros de busca avançada' ? 'Ocultar filtros de busca avançada' : 'Filtros de busca avançada')
  });

  $("#datePickr").flatpickr({
    mode: "range",
    dateFormat: "d/m/Y",
    "locale": "pt"
  });

})


