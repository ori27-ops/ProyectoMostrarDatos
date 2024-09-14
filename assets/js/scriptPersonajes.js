// * https://rickandmortyapi.com/api/character/ -> RICK AND MORTY
let personajes = [];
function getcharacter(id) {
  $.get(`https://rickandmortyapi.com/api/character/${id}`, function (data) {
    personajes.push(data);
      let charCard = $("<div></div>").addClass("caracter-card");

      let nombre = $(`<a href="#" id="${id}"></a>`).text(data.name.toUpperCase()); 
      nombre.addClass("name-personaje");

      let nombreContainer = $("<div></div>").addClass("name-container");
      nombreContainer.append(nombre);

      let img = $("<img />").attr("src", data.image); 
      img.addClass("img-personaje");
      // Información adicional para mostrar en el hover
      let infoDeHover = $("<div></div>").addClass("info-hover");

      

      let circulo_Status = $("<div></div>").addClass("circulo-status");
      if (data.status == "Alive") {
        circulo_Status.addClass("vivo");
      } else if (data.status == "Dead"){
        circulo_Status.addClass("muerto");
      } else {
        circulo_Status.addClass("desconocido");
      }



      let statusContainer = $("<div></div>").addClass("status-container");
      statusContainer.append(circulo_Status); 
      statusContainer.append($("<span></span>").text(`Estado: ${data.status}`)); 

      let species = $("<p></p>").text(`Especie: ${data.species}`);

      let genero = $("<p></p>").text(`Género: ${data.gender}`);

        
      infoDeHover.append(genero, species, statusContainer);

      charCard.append(nombreContainer, img, infoDeHover);
      $("#personajes-container").append(charCard);
  });
}

function filtrarPersonajes(genero) {
  $("#personajes-container").empty(); // Limpiar el contenedor de personajes

  // Filtrar los personajes
  let personajesFiltrados = personajes.filter(personaje => {
    if (genero === "todos") return true; // Mostrar todos si el filtro es "todos"
    return personaje.gender.toLowerCase() === genero.toLowerCase();
  });

  // Mostrar los personajes filtrados
  personajesFiltrados.forEach(personaje => {
    let charCard = $("<div></div>").addClass("caracter-card");

    let nombre = $(`<a href="#" id="${personaje.id}"></a>`).text(personaje.name.toUpperCase()); 
    nombre.addClass("name-personaje");

    let nombreContainer = $("<div></div>").addClass("name-container");
    nombreContainer.append(nombre);

    let img = $("<img />").attr("src", personaje.image); 
    img.addClass("img-personaje");

    charCard.append(nombreContainer, img);
    $("#personajes-container").append(charCard);
  });
}

// Configuración inicial cuando el documento esté listo
$(document).ready(function () {
  // Obtener personajes
  for (let i = 1; i <= 300; i++) {
    getcharacter(i);
  }

  // Evento para filtrar personajes según el género seleccionado
  $("#filter-container").change(function () {
    let generoSeleccionado = $(this).val();
    filtrarPersonajes(generoSeleccionado);
  });
});
