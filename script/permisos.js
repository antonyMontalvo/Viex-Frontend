function cargarCantidadExamenes(idUsuario) {
    var ruta = 'https://viex-app.herokuapp.com';
    $.ajax({
      async: false,
      cache: true,
      url: ruta + '/examenes/cantidad/' + idUsuario,
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).done(function (data) {
        if(!isNaN(data)){
            $('#cantExamenes').text(data);
            $('#examenesCreados').text(data);
        } 
      
    });
  }

  function cargarCantidadCursos(idUsuario) {
    var ruta = 'https://viex-app.herokuapp.com';
    $.ajax({
      async: false,
      cache: true,
      url: ruta + '/cursos/cantidad/' + idUsuario,
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).done(function (data) {
        if(!isNaN(data)){
            $('#cantExamenes').text(data);
            $('#examenesCreados').text(data);
        } 
    });
  }


  

  
  