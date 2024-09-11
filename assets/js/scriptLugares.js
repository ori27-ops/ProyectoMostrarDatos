//* https://rickandmortyapi.com/api/location */
function getLocation(id) {
    $.get(`https://rickandmortyapi.com/api/location/${id}`, function (data) {
        let locationCard = $("<div></div>").addClass("location-card");

        let nombre = $(`<a href="#" id="${id}"></a>`).text(data.name.toUpperCase());
        nombre.addClass("name-lugares");

        let nombreContainer = $("<div></div>").addClass("name-container");
        nombreContainer.append(nombre);

        let infoDeHover = $("<div></div>").addClass("");

        let tituloDetalles = $("<h3></h3>").text("DETALLES:");
        tituloDetalles.addClass("titulo-hover");

        let type = $("<p></p>").text(`Tipo: ${data.type}`);
        let dimension = $("<p></p>").text(`Dimensión: ${data.dimension}`);
        infoDeHover.append(tituloDetalles, type, dimension);

        locationCard.append(nombreContainer, infoDeHover);
        $("#lugares-container").append(locationCard);
    });
}

$(document).on("click", ".name-lugares", function (e) {
    console.log(e.target.id);

    $.get(`https://rickandmortyapi.com/api/location/${e.target.id}`, function (data) {
        
        localStorage.setItem("rickandmorty-data", JSON.stringify(data));
    });
});

$(document).ready(function () {
    console.log(1);
   
    for (let i = 1; i <= 126; i++) {
        getLocation(i); // Corregido a "getLocation(i)"
        /*
        $.get(datastorage.residents[i], function (dataPersonaje) {
          let nombre = $(`<p>${dataPersonaje.name}</p`)
          img.casrr .image // lo que necesites

          $("#residentes-container").append();
        })
        */
    }
});