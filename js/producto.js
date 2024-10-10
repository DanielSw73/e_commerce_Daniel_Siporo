import { data } from "./data.js";

class Producto {
    constructor(titulo, detalle, precio, stock, imagen) {
        this.titulo = titulo;
        this.detalle = detalle;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
}

const prodId = window.location.search.split("=")[1];

const product = data.find(product => product.id === parseInt(prodId));

const container = document.querySelector(".container-product");

const product1 = new Producto(product.title, product.description, product.price, product.price, product.image);

const etiquetas = `
    <div class="card col-12 col-sm-6 col-md-4 col-lg-3 p-0" style="width: 18rem;">
        <img src=${product1.imagen} class="card-img-top w-100" style="height: 13rem; object-fit: cover; object-position: center" alt="${product1.imagen}.jpg">
        <div class="card-body text-center">
            <h5 class="card-title">${product1.titulo}</h5>
            <p class="card-text">${product1.detalle}</p>
            <p class="card-text fw-bold">Stock: ${product1.stock}</p>
            <p class="card-text fw-bold">Precio: $${product1.precio}</p>
        </div>
    </div>
`;

container.innerHTML = etiquetas;
