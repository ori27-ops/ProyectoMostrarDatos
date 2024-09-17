// Obtener una referencia al elemento canvas del DOM
const $grafica = document.querySelector("#grafica");
// Las etiquetas son las porciones de la gráfica
const etiquetas = ["Rick Sanchez", "Morty Smith", "Summer Smith", "Beth Smith", "Jerry Smith", "Mr. Poopybutthole"]
// Podemos tener varios conjuntos de datos. Comencemos con uno
const datosIngresos = {
    data: [35, 25, 15, 10, 8, 7], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    // Ahora debería haber tantos background colors como datos, es decir, para este ejemplo, 4
    backgroundColor: [
        'rgb(51, 204, 51)',
        'rgb(166, 242, 130)',
        'rgb(124, 244, 72)',
        'rgb(0, 153, 0)',
        'rgb(58, 96, 39)',
        'rgb(110, 183, 55)',
    ],// Color de fondo
    borderColor: [
        'rgb(242, 242, 242)',
        'rgb(242, 242, 242)',
        'rgb(242, 242, 242)',
        'rgb(242, 242, 242)',
        'rgb(242, 242, 242)',
        'rgb(242, 242, 242)',
    ],// Color del borde
    borderWidth: 1,// Ancho del borde
};
new Chart($grafica, {
    type: 'pie',// Tipo de gráfica. Puede ser dougnhut o pie
    data: {
        labels: etiquetas,
        datasets: [
            datosIngresos,
            // Aquí más datos...
        ]
        
    },
});