// ~PRODUCTOS~ // 

// fetch('./data.json')
//     .then((respuesta) => respuesta.json())
//     .then((datos) => {
//         let contenedorDeTarjetas = document.querySelector('.contenedor-card2');
//         datos.forEach((producto, index) => {
//             contenedorDeTarjetas.innerHTML += `
//             <div class="producto">
//                 <img src="../imagenes/${producto.imagen}" alt="planta">
//                 <h4 class="titulo-decimal">${producto.nombre}</h4>
//                 <p class="titulo-quinario">${producto.precio}</p>
//             </div>
//                 `;
//         });

//         document.querySelectorAll('.btn.btn-success').forEach((button) => {
//             button.addEventListener('click', () => {
//                 const index = button.getAttribute('data-index');
//                 const producto = datos[index];
//                 const encontrado = carrito.find(item => item.nombre === producto.nombre);
//                 if (encontrado) {
//                     encontrado.cantidad++;
//                 } else {
//                     producto.cantidad = 1;
//                     carrito.push(producto);
//                 }
//                 actualizarCarrito();
//                 guardarCarrito();
//                 Toastify({
//                     text: "Producto añadido al carrito",
//                     gravity: "bottom",
//                     duration: 1500,
//                     close: true,
//                     style: {
//                         background: "red",
//                     }
//                 }).showToast();
//             });
//         });
//     })
//     .catch((error) => console.log(error));




// // ~SELECCIONADOR DE PRODUCTOS~ //

// let contenedorDeTarjetas = document.querySelector(`.contenedor-card2`)

// document.getElementById('filtroProductos').addEventListener('change', function () {
//     fetch('data.json')
//         .then((respuesta) => respuesta.json())
//         .then((datos) => {
//             let filtro = this.value;
//             let productosFiltrados = datos;
//             if (filtro !== 'todo') {
//                 productosFiltrados = datos.filter(producto => producto.tipo === filtro);
//             }

//             contenedorDeTarjetas.innerHTML = '';
//             mostrarProductos(productosFiltrados);
//         })
//         .catch((error) => console.log(error));

// });

// function mostrarProductos(productos) {
//     let contenedorDeTarjetas = document.querySelector('.contenedor-card2');
//     productos.forEach((producto, index) => {
//         contenedorDeTarjetas.innerHTML += `
//         <div class="producto">
//             <img src="../imagenes/${producto.imagen}" alt="planta">
//             <h4 class="titulo-decimal">${producto.nombre}</h4>
//             <p class="titulo-quinario">${producto.precio}</p>
//         </div>
//         `;
//     });

//     document.querySelectorAll('.btn.btn-success').forEach((button) => {
//         button.addEventListener('click', () => {
//             const index = button.getAttribute('data-index'); 
//             const producto = productos[index];

//             const encontrado = carrito.find(item => item.nombre === producto.nombre);
//             if (encontrado) {
//                 encontrado.cantidad++;
//             } else {
//                 producto.cantidad = 1;
//                 carrito.push(producto);
//             }
//             actualizarCarrito();
//             guardarCarrito();

//             Toastify({
//                 text: "Producto añadido al carrito",
//                 gravity: "bottom",
//                 duration: 1500,
//                 close: true,
//                 style: {
//                     background: "red",
//                 }
//             }).showToast();
//         });
//     });
// }


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
    new producto("Cactus Tejido", "imagen-planta.jpg", 0, 1000),
    new producto("Cactus Rastrero", "imagen-planta1.jpg", 0, 1000),
    new producto("Malvon Pensamiento", "imagen-planta2.jpg", 3, 200),
    new producto("Suculenta", "imagen-planta3.jpg", 1, 500),
    new producto("Roseta", "imagen-planta4.jpg", 1, 500),
    new producto("Cornudito", "imagen-planta5.jpg", 1, 300),
    new producto("Rayito De Sol", "imagen-planta6.jpg", 1, 800),
    new producto("Clavel de un Dia", "imagen-planta7.jpg", 3, 100),
    new producto("Cactus Pequeño","imagen-planta8.jpg", 0, 100),
    new producto("Planta Jade","imagen-planta9.jpg", 2, 100),
    new producto("Roseta Tricolor","imagen-planta10.jpg", 1, 100),
    new producto("Roseta Marron","imagen-planta11.jpg", 1, 100),
    new producto("","imagen-planta12.jpg", 1, 100),
    new producto("","imagen-planta13.jpg", 1, 100),
    new producto("","imagen-planta14.jpg", 1, 100)
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



