const title = document.querySelector("h1");
const container = document.querySelector(".container-products");
title.innerText = "Productos";

const array = [];
const url = "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app"

for (let i = 1; i < 10; i++) {
    const card = `
        <div class="card col-12 col-sm-6 col-md-4 col-lg-3 p-0" style="width: 18rem;">
            <img src="${url}/${i}.jpg" class="card-img-top w-100" style="height: 13rem; object-fit: cover; object-position: center" alt="${i}.jpg">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    `
    array.push(card);
}

container.innerHTML = array.join("");


