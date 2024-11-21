import { data } from "./data.js";

class Producto {
    constructor(titulo, detalle, precio, stock, imagen, genres = []) {
        this.titulo = titulo;
        this.detalle = detalle;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
        this.genres = genres;
    }
}

const prodId = parseInt(window.location.search.split("=")[1]);

const product = data.find((product) => product.id === prodId);

const container = document.querySelector(".main__container");

const product1 = new Producto(product.title, product.description, product.price, product.stock, product.image, product.genre);

const etiquetas = `
    <div class="main_card">
        <div class="card-content">
            <div class="product-grid">
                <div class="product-container-img">
                    <img src="${product1.imagen}" alt="${product1.titulo}" class="product-image" >
                </div>
                <div class="product-info">
                    <h1 class="product-title">${product1.titulo}</h1>
                    <div class="genre-tags"></div>
                    <p class="product-price">${product1.precio}</p>
                    <p class="product-stock">Stock disponible: <span id="stockAmount">${product1.stock}</span></p>
                    <p class="product-paragraph">${product1.detalle}</p>
                    ${
                        localStorage.getItem("userEmail")
                            ? `<div class="quantity-controls">
                                    <button class="quantity-btn" id="decrement">-</button>
                                    <span class="quantity" id="quantity">1</span>
                                    <button class="quantity-btn" id="increment">+</button>
                                </div>
                                <button class="add-to-cart" id="addToCartBtn">
                                    Agregar al Carrito
                                </button>`
                            : `<a href="../pages/login.html" class="btn w-50" style="background-color: #33014b; color: #d8b4fe; border: 1px solid #a855f7; align-self: center;">Iniciar Sesion para Comprar</a>`
                    }
                </div>
            </div>
        </div>
    </div>
`;

container.innerHTML = etiquetas;

const containerGenres = document.querySelector(".genre-tags");
const buttonsGenre = product1.genres.map((genre) => `<span class="genre-tag">${genre}</span>`);

containerGenres.innerHTML = buttonsGenre.join("");

const buttonDecrement = document.getElementById("decrement");
const buttonIncrement = document.getElementById("increment");
const counter = document.getElementById("quantity");
const buttonAddCart = document.getElementById("addToCartBtn");
const counterCart = document.querySelector(".user-count");

const incrementItem = () => {
    const quantity = parseInt(counter.innerText);

    if (quantity < product1.stock) {
        counter.innerText = quantity + 1;
    }
};
const decrementItem = () => {
    const quantity = parseInt(counter.innerText);

    if (quantity > 1) {
        counter.innerText = quantity - 1;
    }
};

const addItemsCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) ?? [];
    const quantity = JSON.parse(localStorage.getItem("quantity")) || 0;

    const idProduct = cart.findIndex((item) => item.product.id === prodId);

    const quantityToAdd = parseInt(counter.innerText);

    if (idProduct !== -1) {
        cart[idProduct].quantity += quantityToAdd;
    } else {
        cart.push({ product: product, quantity: quantityToAdd });
    }

    const quantityFull = quantity + quantityToAdd;

    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("quantity", JSON.stringify(quantityFull));

    counterCart.innerText = quantityFull;
    counter.innerText = "1";
};

buttonIncrement.addEventListener("click", incrementItem);
buttonDecrement.addEventListener("click", decrementItem);
buttonAddCart.addEventListener("click", addItemsCart);
