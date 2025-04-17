// ~PRODUCTOS~ // 
let tipos = ["cactus", "suculentas", "crasas", "otras plantas"];

class producto {
    constructor(nombre, imagen, tipo, precio) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.tipo = tipos[tipo]
        this.precio = precio
    }
}

// declaro mis praductos
let productos = [
    new producto("Sedum Palmeri", "imagen-planta.jpg", 1, 1000),
    new producto("Cactus Tejido", "imagen-planta1.jpg", 0, 1000),
    new producto("Cactus Rastrero", "imagen-planta2.jpg", 0, 200),
    new producto("Malvon Pensamiento", "imagen-planta3.jpg", 3, 500),
    new producto("Pico De Pato", "imagen-planta4.jpg", 1, 500),
    new producto("Roseta", "imagen-planta5.jpg", 1, 300),
    new producto("Cornudito", "imagen-planta6.jpg", 1, 800),
    new producto("Rayito De Sol", "imagen-planta7.jpg", 3, 100),
    new producto("Clavel De Un Día","imagen-planta8.jpg", 3, 300),
    new producto("Cactus Pequeño","imagen-planta9.jpg", 0, 1000),
    new producto("Planta Jade","imagen-planta10.jpg", 2, 200),
    new producto("Roseta Tricolor","imagen-planta11.jpg", 1, 100),
    new producto("Roseta Marron","imagen-planta12.jpg", 1, 1500),
    new producto("Echeverria Flor Llama","imagen-planta13.jpg", 1, 900),
    new producto("Aloe Vera","imagen-planta14.jpg", 1, 700)
]

function mostrarProductos(productos) {
    let contenedorDeTarjetas = document.querySelector('.contenedor-productos');
    productos.forEach((producto, index) => {
        contenedorDeTarjetas.innerHTML += `
        <div class="producto">
            <img src="../imagenes/${producto.imagen}" alt="planta">
            <h4 class="titulo-decimal">${producto.nombre}</h4>
            <p class="titulo-quinario">${producto.precio}</p>
        </div>
        `;
    });

}

mostrarProductos(productos);


// ~SELECCIONADOR DE PRODUCTOS~ //
function filtrarProductos(tipoSeleccionado) {
    let contenedorDeTarjetas = document.querySelector('.contenedor-productos');
    contenedorDeTarjetas.innerHTML = ""; // Limpiar el contenedor antes de añadir nuevos elementos

    let productosFiltrados = productos.filter(producto => producto.tipo === tipos[tipoSeleccionado]); 

    productosFiltrados.forEach(producto => {
        contenedorDeTarjetas.innerHTML += `
        <div class="producto">
            <img src="../imagenes/${producto.imagen}" alt="planta">
            <h4 class="titulo-decimal">${producto.nombre}</h4>
            <p class="titulo-quinario">${producto.precio}</p>
        </div>
        `;
    });
}

document.getElementById("selector").addEventListener("change", function () {
    let tipoSeleccionado = this.value;
    
    // Si el usuario elige "Seleccionar", mostramos todos los productos
    if (tipoSeleccionado === "") {
        mostrarProductos(productos);
    } else {
        filtrarProductos(tipos.indexOf(tipoSeleccionado)); 
    }

});



