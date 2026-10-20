const correo = document.getElementById('correo');
const contra = document.getElementById('contrasena');
const loginForm = document.getElementById('loginForm');
const correoMsg = document.getElementById('correoMsg');
const contrasenaMsg = document.getElementById('contrasenaMsg');

correo.addEventListener('input', () => {
    correoMsg.innerText = (!correo.checkValidity())
        ? 'Ingrese un correo válido'
        : '';
});

contra.addEventListener('input', () => {
    contrasenaMsg.innerText = (contra.value.length < 6)
        ? 'La contraseña debe tener al menos 6 caracteres'
        : '';
});

loginForm.addEventListener('submit', e => {
    e.preventDefault();

    let valido = true;

    if (!correo.checkValidity()) {
        correoMsg.innerText = 'Ingrese un correo válido';
        valido = false;
    }

    if (contra.value.length < 6) {
        contrasenaMsg.innerText = 'La contraseña debe tener al menos 6 caracteres';
        valido = false;
    }

    if (valido) {
        //validar credenciales
        if (correo.value === "admin@mail.com" && contra.value === "123456") {
            window.location.href = "intranet.html";
        } else {
            contrasenaMsg.innerText = 'Credenciales no válidas';
        }
    }
});
