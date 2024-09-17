//* https://rickandmortyapi.com/api/episode */
const episodios = [];

function getEpisode(id) {
    $.get(`https://rickandmortyapi.com/api/episode/${id}`, function (data) {
        episodios.push(data);
        let episodeCard = $("<div></div>").addClass("episode-card");

        let nombre = $(`<a href="./detallesEp.html" id="${id}"></a>`).text(data.name.toUpperCase());
        nombre.addClass("name-episodios");

        let nombreContainer = $("<div></div>").addClass("name-container");
        nombreContainer.append(nombre);


        episodeCard.append(nombreContainer);
        $("#episode-container").append(episodeCard);
    });
}

$(document).on("click", ".name-episodios", function (e) {
    console.log(e.target.id);

    $.get(`https://rickandmortyapi.com/api/episode/${e.target.id}`, function (data) {
        
        localStorage.setItem("dataDetalleEpisodios", JSON.stringify(data));
    });
});

function filtrar(numTemporada) {
    const stringMatch = new RegExp(`S${numTemporada.toString().padStart(2, '0')}`);

    const episodiosFiltrados = episodios.filter((ep) => stringMatch.test(ep.episode));
    console.log(episodiosFiltrados);

    // Mostrar solo los episodios
}

$(document).ready(function () {
    console.log(1);
   
    for (let i = 1; i <= 51; i++) {
        getEpisode(i);
    }

    $("#filter-container").on("change", function() {
        if (this.value !== "Todas") {
            filtrar(this.value);
        }
        else {
            // Aca vuelven a mostrar los episodios normal
        }
    })
});