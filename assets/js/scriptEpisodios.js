const episodios = [];

function getEpisode(id) {
    $.get(`https://rickandmortyapi.com/api/episode/${id}`, function (data) {
        episodios.push(data); // Guardar episodio

        // Renderizar directamente el episodio
        showEpisode(data);
    });
}

function showEpisode(data) {
    let episodeCard = $("<div></div>").addClass("episode-card");

    let nombre = $(`<a href="./detallesEp.html" id="${data.id}"></a>`).text(data.name.toUpperCase());
    nombre.addClass("name-episodios");

    let nombreContainer = $("<div></div>").addClass("name-container");
    nombreContainer.append(nombre);

    let numero = $(`<p>${data.episode}</p>`).addClass("numero-episodio");

    episodeCard.append(nombreContainer, numero);
    $("#episode-container").append(episodeCard);
}

$(document).on("click", ".name-episodios", function (e) {
    const episodeId = e.target.id;
    $.get(`https://rickandmortyapi.com/api/episode/${episodeId}`, function (data) {
        localStorage.setItem("dataDetalleEpisodios", JSON.stringify(data));
    });
});

function filtrar(numTemporada) {
    const stringMatch = new RegExp(`S${numTemporada.toString().padStart(2, '0')}`);
    const episodiosFiltrados = episodios.filter((ep) => stringMatch.test(ep.episode));

    $("#episode-container").empty(); // Limpiar resultados anteriores

    episodiosFiltrados.forEach((ep) => {
        showEpisode(ep); // Renderizar cada episodio filtrado
    });
}

$(document).ready(function () {
    console.log(1);
    for (let i = 1; i <= 51; i++) {
        getEpisode(i);
    }

    $("#filter-container").on("change", function() {
        if (this.value !== "Todas") {
            filtrar(this.value);
        } else {
            $("#episode-container").empty(); // Limpiar resultados anteriores
            episodios.forEach((ep) => {
                showEpisode(ep); // Renderizar todos los episodios
            });
        }
    });
});