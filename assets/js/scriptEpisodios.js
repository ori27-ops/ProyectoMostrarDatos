//* https://rickandmortyapi.com/api/episode */
function getEpisode(id) {
    $.get(`https://rickandmortyapi.com/api/episode/${id}`, function (data) {
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

$(document).ready(function () {
    console.log(1);
   
    for (let i = 1; i <= 126; i++) {
        getEpisode(i);
    }
});