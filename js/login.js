import user from "../js/userData.js";

const form = document.querySelector(".form");

const validationData = (event) => {
    event.preventDefault();
    const emailForm = event.target.elements.email.value;
    const passwordForm = event.target.elements.password.value;

    if (emailForm === user.email && passwordForm === user.password) {
        localStorage.setItem("userEmail", emailForm);
        localStorage.setItem("cart", JSON.stringify([]));
        localStorage.setItem("quantity", "0");
        window.location.href = "../index.html";
    } else {
        const messageError = document.querySelector(".form-input-error");
        messageError.classList.remove("d-none");
        Toastify({
            text: "Error: no se pudo iniciar sesión. Por favor, verifica tus credenciales.",
            className: "error",
            style: {
              background: "#dc3545",
              color: "#fff",
            },
            duration: 4000,
          }).showToast();
    }
};

form.addEventListener("submit", validationData);
