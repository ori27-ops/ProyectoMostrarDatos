
// URL de la API de ubicaciones de Rick and Morty
let allLocations = [];
function getLocation(id) {
    $.get(`https://rickandmortyapi.com/api/location/${id}`, function (data) {
        allLocations.push(data);
        let locationCard = $("<div></div>").addClass("location-card");

        let nombre = $(`<a href="./detalleLugar.html" id="${id}"></a>`).text(data.name.toUpperCase());
        nombre.addClass("name-lugares");


        let nombreContainer = $("<div></div>").addClass("name-container");
        nombreContainer.append(nombre);


        locationCard.append(nombreContainer);
        $("#lugares-container").append(locationCard);
    });
}


$(document).on("click", ".name-lugares", function (e) {
    $.get(`https://rickandmortyapi.com/api/location/${e.target.id}`, function (data) {
    localStorage.setItem("dataDetalleLugar", JSON.stringify(data));
    });
});



function filtrarLugares(tipo) {
    $("#lugares-container").empty(); 

    allLocations.filter((location) => {
        if (tipo === "todos") return true; 
        return location.type.toLowerCase() === tipo.toLowerCase(); 

    }).map((location) => {
        let locationCard = $("<div></div>").addClass("location-card");

        let nombre = $(`<a href="./detallesLugar.html" id="${location.id}"></a>`).text(location.name.toUpperCase());
        nombre.addClass("name-lugares");

        let nombreContainer = $("<div></div>").addClass("name-container");
        nombreContainer.append(nombre);

        locationCard.append(nombreContainer);
        $("#lugares-container").append(locationCard);
    });
}


$(document).ready(function () {
    for (let i = 1; i <= 126; i++) {
    getLocation(i); 
    }

    // Evento para filtrar 
    $("#filter-container").change(function () {
    let tipoSeleccionado = $(this).val();
    filtrarLugares(tipoSeleccionado); 
    });
});