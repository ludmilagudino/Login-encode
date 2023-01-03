//CAMBIO DE COLOR DE LOGIN
const check = document.getElementById("checkButton");
const login = document.getElementById("loginButton");

check.addEventListener('change', (e) => {
    e.preventDefault();
    if (e.target.checked === true) {
        login.classList.add("cambioColor")
    } else {
        login.classList.remove("cambioColor")
    }
})

//EXPRESIONES REGULARES PARA VALIDAR LOGIN
const expresiones = {
    usuario: /^[a-zA-Z0-9]{4,16}$/,
    contraseña: /^\d{4}$/
}



//VALIDACION CAMPOS DE LOGIN

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "usuario":
            if (expresiones.usuario.test(e.target.value)) {
                document.getElementById("incorrectoUsuario").innerHTML =``
                login.removeAttribute('disabled');
                login.classList.add("habilitado");
            }else{
                document.getElementById("incorrectoUsuario").innerHTML =`
                <img class="imgError" src="./imagenes/error-solid-24.png" alt="error">
                <p>Usuario incorrecto </p>
                `
                login.classList.add("habilitado");
                login.setAttribute('disabled', true)
            }
            break;

        case "contraseña":
            if (expresiones.contraseña.test(e.target.value)) {
                document.getElementById("incorrectoContra").innerHTML =``
                login.removeAttribute('disabled');
            }else{
                document.getElementById("incorrectoContra").innerHTML =`
                <img class="imgError" src="./imagenes/error-solid-24.png" alt="error">
                <p>Constraseña incorrecta </p>
                `
                login.setAttribute('disabled', true)
            }
            break;
    }
}

//FUNCION PARA VALIDAR LO QUE INGRESA EL USUARIO

const inputs = document.querySelectorAll("#formulario input")

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});


//MODAL MENSAJE BIENVENIDA
const modalFondo = document.querySelector(".overlay");
const modal = document.querySelector(".modal-box")

const closeBtn = document.querySelector(".close-btn");


// login.addEventListener('submit' , () => modalFondo.classList.add("active"));
// login.addEventListener('submit' , () => modal.classList.add("active"));

closeBtn.addEventListener("click" , () => modalFondo.classList.remove("active"));
closeBtn.addEventListener("click" , () => modal.classList.remove("active"));


document.querySelector ('form').addEventListener ('submit', (e) => {
    e.preventDefault();
    modalFondo.classList.add("active");
    modal.classList.add("active");
});
