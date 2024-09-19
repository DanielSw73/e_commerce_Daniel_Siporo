class Producto {
    constructor(titulo, detalle, precio, stock, imagen) {
        this.titulo = titulo;
        this.detalle = detalle;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }

    mostrarProducto() {
        const container = document.querySelector(".container-product");
        container.innerHTML += `
        <div class="card col-12 col-sm-6 col-md-4 col-lg-3 p-0" style="width: 18rem;">
                <img src="${url}/${this.imagen}.jpg" class="card-img-top w-100" style="height: 13rem; object-fit: cover; object-position: center" alt="${this.imagen}.jpg">
                <div class="card-body text-center">
                    <h5 class="card-title">${this.titulo}</h5>
                    <p class="card-text">${this.detalle}</p>
                    <p class="card-text fw-bold">Stock: ${this.stock}</p>
                    <p class="card-text fw-bold">Precio: $${this.precio}</p>
                </div>
            </div>
        `;
    }
}

const url = "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app";

const product1 = new Producto("Renault", "Some quick example text to build on the card title and make up the bulk of the card's content.", 3423, 12, 2);
const product2 = new Producto("Renault2", "Some quick example text to build on the card title and make up the bulk of the card's content.", 3423, 12, 8);

product1.mostrarProducto();
product2.mostrarProducto();
