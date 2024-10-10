import { data } from "./data.js"

const mostrarProductos = () => {
    const title = document.querySelector("h1");
    const container = document.querySelector(".container-products");
    title.innerText = "Productos";

    // const url = "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app";

    const array = data.map((product) => `
            <div class="card col-12 col-sm-6 col-md-4 col-lg-3 p-0 border-success mb-3" style="width: 18rem;">
                <img src="${product.image}" class="card-img-top w-100" style="height: 13rem; object-fit: cover; object-position: center" alt="${product.title}-${product.id}">
                <div class="card-body text-center bg-success bg-opacity-25">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text" style="text-align: center; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;">${product.description}</p>
                    <a href="../pages/producto.html?prod=${product.id}" class="btn btn-success">Ver más</a>
                </div>
            </div>
        `
    );

    container.innerHTML = array.join("");
};

mostrarProductos();
