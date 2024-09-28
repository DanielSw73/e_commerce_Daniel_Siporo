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
            <div></div>
        </div>
    </nav>
`;
header.innerHTML = navbar;

const categories = [
    { title: "Productos", href: "../pages/productos.html" },
    { title: "Productos1", href: "../pages/categories.html" },
];

const menu = document.querySelector(".navbar-nav");

for (let category of categories) {
    menu.innerHTML += `
        <li class="nav-item link-underline-opacity-100-hover">
            <a class="nav-link active text-white" aria-current="page" href="${category.href}">${category.title}</a>
        </li>
    `;
}
