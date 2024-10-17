import { data } from "./data.js";
const title = document.querySelector("h1");
title.innerText = "Productos";

const mostrarProductos = (products) => {
    const container = document.querySelector(".container-products");

    // const url = "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app";

    const array = products.map(
        (product) => `
            <div class="card col-12 col-sm-6 col-md-4 col-lg-3 p-0 border-success mb-3" style="width: 18rem;">
                <img src="${product.image}" class="card-img-top w-100" style="height: 13rem; object-fit: cover; object-position: center" alt="${product.title}-${product.id}">
                <div class="card-body text-center bg-success bg-opacity-25">
                    <h2 class="card-title">${product.title}</h5>
                    <h5 class="card-title">${product.genre}</h6>
                    <p class="card-text" style="text-align: center; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;">${product.description}</p>
                    <a href="../pages/producto.html?prod=${product.id}" class="btn btn-success">Ver más</a>
                </div>
            </div>
        `
    );

    container.innerHTML = array.join("");
};

mostrarProductos(data);

const inputSearch = document.querySelector(".form-control");
const formSearch = document.querySelector("form[role='search']");
const containerTabs = document.querySelector(".list-tabs");

const genres = ["Todos", "Drama", "Documentary", "Romance", "Comedy", "Crime", "Sci-Fi", "Horror", "Thriller", "Musical"];

const buttons = genres.map(
    (genre) => `
    <li class="nav-item px-1 py-3">
        <button class="btn btn-success genre-btn" aria-current="page" type="button">${genre}</button>
    </li>`
);
containerTabs.innerHTML = buttons.join("");

const filterMoviesByGenre = (genre) => {
    let filteredMovies;
    if (genre === "Todos") {
        filteredMovies = data;
    } else {
        filteredMovies = data.filter((movie) => movie.genre.toLowerCase().includes(genre.toLowerCase()));
    }
    mostrarProductos(filteredMovies);
};

const genreButtons = document.querySelectorAll(".genre-btn");
genreButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        filterMoviesByGenre(event.target.innerText);
    });
});

const filtrarProductos = () => {
    const title = inputSearch.value.toLowerCase();
    const prodsFiltered = title ? data.filter((product) => product.title.toLowerCase().startsWith(title.toLowerCase())) : data;
    mostrarProductos(prodsFiltered);
};

inputSearch.addEventListener("input", filtrarProductos);

formSearch.addEventListener("submit", (event) => {
    event.preventDefault();
    filtrarProductos();
});

formSearch.addEventListener("reset", () => {
    mostrarProductos(data);
});
