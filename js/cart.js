const productsSection = document.querySelector(".main__container-products");
const productsTotal = document.querySelector(".main__container-total");
const templateProduct = document.getElementById("card-product");
const templateTotal = document.getElementById("total");
const cartItems = [];
const userCount = document.querySelector(".user-count");
const carrito = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];

function calculateTotal(cartArray) {
    let total = 0;

    cartArray.forEach((item) => {
        total += item.product.price * item.quantity;
    });

    return total.toFixed(2);
}

function removeProduct(productId) {
    let cartData = JSON.parse(localStorage.getItem("cart"));
    const newCart = cartData.filter((item) => item.product.id !== productId);
    localStorage.setItem("cart", JSON.stringify(newCart));
    console.log(newCart)
    let totalQuantity = 0;

    for (const item of newCart) {
        totalQuantity += item.quantity;
    }

    localStorage.setItem("quantity", totalQuantity);

    mostrarProductos(newCart);
}

function checkout() {
    const user = localStorage.getItem("userEmail");
    const cartItems = JSON.parse(localStorage.getItem("cart"));

    const resource = {
        user: user,
        items: cartItems,
    };

    fetch("https://67367b0baafa2ef222309f81.mockapi.io/cart/orders", {
        method: "POST",
        body: JSON.stringify(resource),
    })
        .then((response) => response.json())
        .then((data) => {
            Swal.fire({
                title: `Gracias ${data.user}!`,
                text: `Hemos registrado tu orden número ${data.id}.`,
                icon: "success",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Aceptar",
            }).then(() => {
                clearCart();
            });
        })
        .catch((error) => {
            Swal.fire({
                title: "Error",
                text: "Hubo un problema al registrar tu orden. Por favor, intenta de nuevo.",
                icon: "error",
                confirmButtonColor: "#d33",
                confirmButtonText: "Aceptar",
            });
            console.error("Error al registrar la orden:", error);
        });
}

function clearCart() {
    localStorage.removeItem("cart");
    localStorage.setItem("quantity", 0);
}

const clearCartButton = document.getElementById("clearCart");
clearCartButton.addEventListener("click", () => {
    clearCart();
    mostrarProductos(JSON.parse(localStorage.getItem("cart"))??[]);
});

const mostrarTotal = (cards) => {
    const total = cards.reduce((acu, current) => {
        return acu + current.product.price * current.quantity;
    }, 0);

    document.querySelector(".main__total-price span").textContent = total.toFixed(2);
};

const mostrarProductos = (cards) => {
    productsSection.innerHTML = "";
    if (cards.length !== 0) {
        const list = cards.map(
            (producto) =>
                `
            <article class="main__product">
                <div class="main__container-product-img">
                    <img class="main__product-img" src="${producto.product.image}" alt="${producto.product.title}">
                </div>
                <div class="main__wrapper">
                    <div class="main__container-title-trash">
                        <h3 class="main__product-title">${producto.product.title}</h3>
                    </div>
                    <div class="main__container-count-price">
                        <i class="bi bi-trash" onclick="removeProduct(${producto.product.id})"></i>
                        <div class="main__container-price">
                            <p class="main__price">Cantidad: <span>${producto.quantity}</span></p>
                            <p class="main__price">Precio: $<span>${producto.product.price}</span></p>
                            <p class="main__price">Total: $<span>${producto.product.price * producto.quantity}</span></p>
                        </div>
                    </div>
                </div>
            </article>
            `
        );
        document.querySelector(".main__container-total").classList.remove("d-none");
        document.querySelector(".clearBtn").classList.remove("d-none");
        productsSection.innerHTML = list.join("");
        mostrarTotal(cards);
    } else {
        document.querySelector(".main__container-total").classList.add("d-none");
        document.querySelector(".clearBtn").classList.add("d-none");
        const h2 = document.createElement("h2");
        const containerBody = document.querySelector(".main__container-products-total");
        containerBody.style.flexDirection = "column";
        productsSection.style.width = "100%";
        h2.className = "main__store";
        h2.style.paddingTop = "7rem";
        h2.style.paddingBottom = "7rem";
        h2.style.textAlign = "center";
        h2.textContent = "No hay Productos en el Carrito";
        productsSection.appendChild(h2);
    }
};

mostrarProductos(JSON.parse(localStorage.getItem("cart")) ?? []);
