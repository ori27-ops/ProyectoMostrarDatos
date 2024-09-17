$(document).ready(function () {
  // Obtenemos el dato del lugar guardado
  const lugar = JSON.parse(localStorage.getItem("dataDetalleLugar"));

  console.log(lugar);
  
   $("#nombre-lugar").text(lugar.name)
   let cajaInfo = $("<div></div>").addClass("info-caja");
   let tipo = $("<h2></h2>").text(`Tipo: ${lugar.type}`).addClass("tipo-lugar");
   let dimension = $("<h2></h2>").text(lugar.dimension === "unknown" ? `Dimensión desconocida` : lugar.dimension).addClass("dimension-lugar");
   let residentes = $("<h2></h2>").text("Residentes:").addClass("tit-residentes");
   cajaInfo.append(tipo,dimension,residentes);
   $("#info-container").append(cajaInfo);
   

   if (lugar.residents.length > 0) {
      // Llenar los residentes
    for (let residente of lugar.residents) {
      $.get(residente, function (residenteData) {
        let card = $("<div></div>").addClass("detalles-card");
        let nombre = $(`<h2></h2`).text(residenteData.name);
        let img = $("<img />").attr("src", residenteData.image);
        

        card.append(img, nombre);

        $("#residentes-container").append(card);
      });
    }
  } else {
    $("#residentes-container").append("<p>Este lugar no tiene residentes</p>");
  }
 
});