const header = document.querySelector("header");
const navbar = `
    <nav class="navbar navbar-expand-lg px-2 bg-success p-2">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="container-fluid">
            <div></div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                </ul>
            </div>
            <div>
                <form class="d-flex gap-1" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success text-white border-white" type="submit">Search</button>
                    <button type="reset" class="btn btn-danger">Reset</button>
                </form>
            </div>
        </div>
    </nav>
`;
header.innerHTML = navbar;

const categories = [
    { title: "Home", href: "../index.html" },
    { title: "Productos", href: "../pages/productos.html" },
    { title: "About", href: "../pages/categories.html" },
];

const menu = document.querySelector(".navbar-nav");

for (let category of categories) {
    menu.innerHTML += `
        <li class="nav-item link-underline-opacity-100-hover">
            <a class="nav-link active text-white" aria-current="page" href="${category.href}">${category.title}</a>
        </li>
    `;
}
