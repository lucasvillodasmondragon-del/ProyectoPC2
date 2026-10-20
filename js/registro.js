// obtener elementos
const form = document.querySelector('.form-container');
const txtUsuario = document.getElementById('txtUsuario');
const txtNombre = document.getElementById('txtNombre');
const txtApellido = document.getElementById('txtApellido');
const txtCorreo = document.getElementById('txtCorreo');
const txtClave = document.getElementById('txtClave');
const txtClaveRep = document.getElementById('txtClaveRep');
const modal = document.getElementById('modal');

const usuarioMsg = document.getElementById('usuarioMsg');
const nombreMsg = document.getElementById('nombreMsg');
const apellidoMsg = document.getElementById('apellidoMsg');
const correoMsg = document.getElementById('correoMsg');
const claveMsg = document.getElementById('claveMsg');
const claveRepMsg = document.getElementById('claveRepMsg');

txtUsuario.addEventListener('input', () => {
    usuarioMsg.innerText = (txtUsuario.value.length < 5)
        ? 'El usuario debe tener al menos 5 caracteres' : '';
});

txtNombre.addEventListener('input', () => {
    nombreMsg.innerText = (txtNombre.value.length < 2)
        ? 'El nombre debe tener al menos 2 caracteres' : '';
});

txtApellido.addEventListener('input', () => {
    apellidoMsg.innerText = (txtApellido.value.length < 2)
        ? 'El apellido debe tener al menos 2 caracteres' : '';
});

txtCorreo.addEventListener('input', () => {
    correoMsg.innerText = (!txtCorreo.checkValidity())
        ? 'Ingrese un correo válido' : '';
});

txtClave.addEventListener('input', () => {
    claveMsg.innerText = (txtClave.value.length < 6)
        ? 'La contraseña debe tener al menos 6 caracteres' : '';
});

txtClaveRep.addEventListener('input', () => {
    claveRepMsg.innerText = (txtClaveRep.value !== txtClave.value)
        ? 'Las contraseñas no coinciden' : '';
});

// validancion antes de enviar
form.addEventListener('submit', function (e) {
    e.preventDefault();

    let valido = true;

    //  solo mensajes
    if (txtUsuario.value.length < 5) {
        usuarioMsg.innerText = 'El usuario debe tener al menos 5 caracteres';
        valido = false;
    }

    if (txtNombre.value.length < 2) {
        nombreMsg.innerText = 'El nombre debe tener al menos 2 caracteres';
        valido = false;
    }

    if (txtApellido.value.length < 2) {
        apellidoMsg.innerText = 'El apellido debe tener al menos 2 caracteres';
        valido = false;
    }

    if (!txtCorreo.checkValidity()) {
        correoMsg.innerText = 'Ingrese un correo válido';
        valido = false;
    }

    if (txtClave.value.length < 6) {
        claveMsg.innerText = 'La contraseña debe tener al menos 6 caracteres';
        valido = false;
    }

    if (txtClave.value !== txtClaveRep.value) {
        claveRepMsg.innerText = 'Las contraseñas no coinciden';
        valido = false;
    }

    if (valido) {
        modal.style.display = 'flex';
        form.reset();
        usuarioMsg.innerText = '';
        nombreMsg.innerText = '';
        apellidoMsg.innerText = '';
        correoMsg.innerText = '';
        claveMsg.innerText = '';
        claveRepMsg.innerText = '';
    }
});

function cerrarModal() {
    modal.style.display = 'none';
}

window.addEventListener('keydown', e => {
    if (e.key === 'Escape') cerrarModal();
});

window.addEventListener('click', e => {
    if (e.target === modal) cerrarModal();
});
