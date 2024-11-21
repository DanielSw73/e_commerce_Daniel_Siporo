const header = document.querySelector("header");
const quantity = localStorage.getItem("quantity") ? localStorage.getItem("quantity") : 0;

const navbar = `
    <div class="container-nav-menu">
        <div class="container-logo-menu">
            <div class="container_logo">
                <a href="index.html"><img id="logo" src="../images/logo_vorruv.png" alt="logo"></a>
            </div>
            <div class="container-menu">
                <input type="checkbox" id="nav-toggle" title="opciones">
                <label for="nav-toggle" class="nav-toggle-label">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <nav class="header-nav">
                    <ul class="header-ul"></ul>
                </nav>
            </div>
            <div class="container-account">
                <a style="text-align: center;" class="cart-nav" href="../pages/cart.html"><i class="bi bi-cart2" id="cart"></i><span class="user-count badge rounded-pill">${quantity}</span></a>
                ${
                    localStorage.getItem("userEmail")
                        ? `
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" style="background-color: #9333ea; border: 1px solid #b7b8ffa9;display: flex; align-items: center;" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Hola, ${localStorage.getItem("userEmail").split("@")[0]}
                            </button>
                            <ul class="dropdown-menu">
                                <li class="dropdown-item close-sesion">Cerrar Sesion</li>
                            </ul>
                        </div>`
                        : `<a class="login" href="../pages/login.html"><i class="bi bi-person-circle" id="sesion"></i></a>`
                }
            </div>
        </div>
    </div>
`;
header.innerHTML = navbar;

const categories = [
    { title: "Home", href: "../index.html" },
    { title: "Products", href: "../pages/productos.html" },
    { title: "Contact", href: "../pages/categories.html" },
    { title: "About Us", href: "../pages/categories.html" },
];

const menu = document.querySelector(".header-ul");

for (let category of categories) {
    menu.innerHTML += `
        <li class="list-item"><a class="link" href="${category.href}">${category.title}</a></li>
    `;
}

const closeSesion = () => {
    localStorage.clear();
    window.location.href = "../index.html";
};

document.querySelector(".close-sesion").addEventListener("click", closeSesion);
