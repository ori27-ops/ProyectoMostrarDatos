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
    options: {
        legend: {
            labels: {
                fontColor: "white",
                fontSize: 14
            }
        }
    }
});
 
console.log("")

// Obtener una referencia al elemento canvas del DOM
const $estadistica = document.querySelector("#estadistica");
// Las etiquetas son las que van en el eje X. 
const datos = ["Temporada 1", "Temporada 2", "Temporada 3", "Temporada 4", "Temporada 5", "Temporada 6"]
// Podemos tener varios conjuntos de datos. Comencemos con uno
const datosestadisticos = {
    label: "Ratings",

    data: [9.2, 9.3, 9.3, 8.9, 8.7, 9.1], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: [
        'rgb(51, 204, 51)',
        'rgb(166, 242, 130)',
        'rgb(124, 244, 72)',
        'rgb(0, 153, 0)',
        'rgb(58, 96, 39)',
        'rgb(110, 183, 55)',
    ],  // Color de fondo
    borderColor: [
        'rgb(242, 242, 242)',
        'rgb(242, 242, 242)',
        'rgb(242, 242, 242)',
        'rgb(242, 242, 242)',
        'rgb(242, 242, 242)',
        'rgb(242, 242, 242)',
    ], // Color del borde
    borderWidth: 1,// Ancho del borde
};
new Chart($estadistica, {
    type: 'bar',// Tipo de gráfica
    data: {
        labels: datos,
        datasets: [
            datosestadisticos,
            // Aquí más datos...
        ]
    },
    options: {
        legend: {
            labels: {
                fontColor: "white", // Color de las etiquetas de la leyenda
                fontSize: 14, // Tamaño de las etiquetas de la leyenda
            },
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "white", // Cambia el color de las etiquetas del eje Y a blanco
                    fontSize: 14,
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "white", // Cambia el color de las etiquetas del eje X a blanco
                    fontSize: 14,
                }
            }]
        },
    }
});