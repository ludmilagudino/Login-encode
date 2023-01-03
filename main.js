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
                campos.usuario = true;
                console.log(campos.usuario);
            }else{
                document.getElementById("incorrectoUsuario").innerHTML =`
                <img class="imgError" src="./imagenes/error-solid-24.png" alt="error">
                <p>Usuario incorrecto </p>
                `
                campos.usuario = false;
                console.log(campos.usuario);
            }
            break;

        case "contraseña":
            if (expresiones.contraseña.test(e.target.value)) {
                document.getElementById("incorrectoContra").innerHTML =``
                campos.contraseña= true;
                console.log(campos.contraseña);
            }else{
                document.getElementById("incorrectoContra").innerHTML =`
                <img class="imgError" src="./imagenes/error-solid-24.png" alt="error">
                <p>Constraseña incorrecta </p>
                `
                campos.contraseña= false;
                console.log(campos.contraseña);
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



//BOTON HABILITADO SOLO SI LOS CAMPOS ESTAN VALIDADOS

const campos = {
    usuario: false,
    contraseña: false
}

// login.addEventListener('click', (e) => {
//     console.log(campos);
//     e.preventDefault();
//     if (campos.usuario == true && campos.contraseña == true){
        
//     }
// });

function habilitarBoton (){
    if (campos.usuario == true && campos.contraseña == true){
        
    }
}

