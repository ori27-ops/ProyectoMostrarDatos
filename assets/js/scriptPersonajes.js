// * https://rickandmortyapi.com/api/character/ -> RICK AND MORTY

function getcharacter(id) {
    $.get(`https://rickandmortyapi.com/api/character/${id}`, function (data) {
        let charCard = $("<div></div>").addClass("caracter-card");
  
        let nombre = $(`<a href="#" id="${id}"></a>`).text(data.name.toUpperCase()); 
        nombre.addClass("name-personaje");
  
        let nombreContainer = $("<div></div>").addClass("name-container");
        nombreContainer.append(nombre);
  
        let img = $("<img />").attr("src", data.image); 
        img.addClass("img-personaje");
        // Información adicional para mostrar en el hover
        let infoDeHover = $("<div></div>").addClass("info-hover");
  
        let tituloDetalles = $("<h3></h3>").text("DETALLES:");
        tituloDetalles.addClass("titulo-hover");
  
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
  
          
        infoDeHover.append(tituloDetalles, species, statusContainer);
  
        charCard.append(nombreContainer, img, infoDeHover);
        $("#personajes-container").append(charCard);
    });
  }
  
  $(document).on("click", ".name-personaje", function (e) {
    console.log(e.target.id);
  
    $.get(`https://rickandmortyapi.com/api/character/${e.target.id}`, function (data) {
        // GUARDAMOS TODA LA DATA DEL API EN EL LOCALSTORAGE
        localStorage.setItem("rickandmorty-data", JSON.stringify(data));
    });
  });
  
  $(document).ready(function () {
    // Mostrar los personajes
    for (let i = 1; i <= 300; i++) {
        getcharacter(i); // Corregido a "getcharacter(i)"
    }
  });
  