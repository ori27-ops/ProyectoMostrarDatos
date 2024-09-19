$(document).ready(function () {

    const episodio = JSON.parse(localStorage.getItem("dataDetalleEpisodios"));

    console.log(episodio);
    
    let nombre = $("#nombre-episodio").text(episodio.name)
    let cajaInfo = $("<div></div>").addClass("info-caja");
    let detallesAdicionales = $("<div></div>").addClass("detalles-adicionales");
    let titPersonajes = $("<div></div>").addClass("tit-personajes");
    let fecha = $("<h2></h2>").text(`Fecha al aire: ${episodio.air_date}`).addClass("fecha-episodio");
    let epis = $("<h2></h2>").text(`Temporada: ${episodio.episode}"`).addClass("nombre-episodio");
    let charactersTitle = $("<h2></h2>").text("Personajes:").addClass("tit-personaj");
    cajaInfo.append(nombre);
    $("#info-container").append(cajaInfo);
    detallesAdicionales.append(fecha,epis);
    $("#tipo-Dimension").append(detallesAdicionales);
    titPersonajes.append(charactersTitle);
    $("#titulo-Personaje").append(titPersonajes);
    
    if (episodio.characters.length > 0) {
        for (let characters of episodio.characters) {
            $.get(characters, function (charactersData) {
            let card = $("<div></div>").addClass("detalles-card");
            let nombre = $(`<h2></h2>`).text(charactersData.name);
            let img = $("<img />").attr("src", charactersData.image);
            

            card.append(img, nombre);

        $("#personajes-container").append(card);
        });
    }
    } else {
    $("#personajes-container").append("<p>Este lugar no tiene residentes</p>");
    }

});