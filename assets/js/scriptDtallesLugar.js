$(document).ready(function () {
  // Obtenemos el dato del lugar guardado
  const lugar = JSON.parse(localStorage.getItem("dataDetalleLugar"));

  console.log(lugar);
  
   let nombre = $("#nombre-lugar").text(lugar.name)
   let cajaInfo = $("<div></div>").addClass("info-caja");
   let detallesAdicionales = $("<div></div>").addClass("detalles-adicionales");
   let titResidente = $("<div></div>").addClass("tit-residentes");
   let tipo = $("<h2></h2>").text(`Tipo: ${lugar.type}`).addClass("tipo-lugar");
   let dimension = $("<h2></h2>").text(lugar.dimension === "unknown" ? `Dimensión desconocida` : lugar.dimension).addClass("dimension-lugar");
   let residentes = $("<h2></h2>").text("Residentes:").addClass("tit-residentes");
   
   cajaInfo.append(nombre);
   $("#info-container").append(cajaInfo);
   detallesAdicionales.append(dimension, tipo,residentes);
   $("#tipo-Dimension").append(detallesAdicionales);
   titResidente.append(residentes);
   $("#titulo-Residente").append(titResidente);
   

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