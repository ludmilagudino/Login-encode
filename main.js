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

//VALIDACION CONTRASEÑA
const expresiones = {
    usuario: /^[a-zA-Z0-9]{4,16}$/,
    contraseña: /^\d{4}$/

}

const contraseña = document.getElementById("contraseña");


//HABILITAR/DESHABILITAR BOTON LOGIN

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "usuario":
            if (expresiones.usuario.test(e.target.value)) {
                document.getElementById("incorrectoUsuario").innerHTML =``

            }else{
                document.getElementById("incorrectoUsuario").innerHTML =`
                <p>Usuario incorrecto </p>
                `
            }
            break;

        case "contraseña":
            if (expresiones.contraseña.test(e.target.value)) {
                document.getElementById("incorrectoContra").innerHTML =``

            }else{
                document.getElementById("incorrectoContra").innerHTML =`
                <p>Constraseña incorrecta </p>
                `
            }
            break;
    }
}

const inputs = document.querySelectorAll("#formulario input")

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

login.addEventListener('submit', (e) => {
    e.preventDefault();
});

