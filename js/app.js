import { data } from "./data.js";

const title = document.querySelector("h1");
title.innerText = "Productos";

const mostrarProductos = (products) => {
    const container = document.querySelector(".container-products");

    // const url = "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app";

    const array = products.map(
        (product) => `
            <div class="card col-12 col-sm-6 col-md-4 col-lg-3 p-0 mb-3" style="width: 18rem; border: 1px solid #28076be3; border-radius: 7px; background-color: #1c0761">
                <img src="${product.image}" class="card-img-top w-100" style="height: 13rem; object-fit: cover; object-position: center; border-radius: 5px" alt="${product.title}-${product.id}">
                <div class="card-body text-center p-3" style="background-color: #1c0761; display: flex; flex-direction: column; justify-content: space-between; border-end-end-radius: 5px; border-end-start-radius: 5px">
                    <h2 class="card-title text-light fs-5 m-0" style="flex: 1; text-wrap: balance">${product.title}</h5>
                    <h5 class="card-title text-light fs-6 my-2" style="flex: 1; text-wrap: balance; text-align:center">${product.genre.join(" | ")}</h6>
                    <p class="card-text text-light fs-6" style="text-align: center; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; text-wrap: pretty; padding: 0.02rem">${
                        product.description
                    }</p>
                    <a href="../pages/producto.html?prod=${product.id}" class="btn text-white" style="background-color: #5e4cad;">Ver más</a>
                </div>
            </div>
        `
    );

    container.innerHTML = array.join("");
};

const spinner = document.querySelector(".loader-spinner");

const myPromise = (movies) => {
    spinner.style.display = "flex";
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mostrarProductos(movies));
            spinner.style.display = "none";
        }, 3000);
    });
};

myPromise(data);

const inputSearch = document.querySelector(".form-control");
const formSearch = document.querySelector("form[role='search']");
const containerTabs = document.querySelector(".list-tabs");
const buttonReset = document.querySelector(".btn-reset");

const genres = ["Todos", "Drama", "Action", "Documentary", "Romance", "Comedy", "Crime", "Sci-Fi", "Horror", "Thriller", "Musical", "Animation", "Fantasy"];

const buttons = genres.map(
    (genre) => `
    <li class="nav-item px-1 py-3">
        <button class="btn genre-btn" style="background-color: #1c0761; color: #fff;" aria-current="page" type="button">${genre}</button>
    </li>`
);
containerTabs.innerHTML = buttons.join("");

const filterMoviesByGenre = (genre) => {
    let filteredMovies;
    if (genre === "Todos") {
        filteredMovies = data;
    } else {
        filteredMovies = data.filter((movie) => movie.genre.some((g) => g.toLowerCase().includes(genre.toLowerCase())));
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
    if (inputSearch.value.trim() !== "") {
        buttonReset.disabled = false;
    } else {
        buttonReset.disabled = true;
    }
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
