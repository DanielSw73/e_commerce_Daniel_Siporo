class Producto {
    constructor(titulo, detalle, precio, stock, imagen) {
        this.titulo = titulo;
        this.detalle = detalle;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
}

const url = "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app";
const container = document.querySelector(".container-product");

const product1 = new Producto("Renault", "Some quick example text to build on the card title and make up the bulk of the card's content.", 3423, 12, 2);

const etiquetas = `
    <div class="card col-12 col-sm-6 col-md-4 col-lg-3 p-0" style="width: 18rem;">
        <img src="${url}/${product1.imagen}.jpg" class="card-img-top w-100" style="height: 13rem; object-fit: cover; object-position: center" alt="${product1.imagen}.jpg">
        <div class="card-body text-center">
            <h5 class="card-title">${product1.titulo}</h5>
            <p class="card-text">${product1.detalle}</p>
            <p class="card-text fw-bold">Stock: ${product1.stock}</p>
            <p class="card-text fw-bold">Precio: $${product1.precio}</p>
        </div>
    </div>
`;

container.innerHTML = etiquetas;
