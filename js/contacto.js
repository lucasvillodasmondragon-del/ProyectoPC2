const form = document.querySelector(".form-container");
const dialog = document.getElementById("formDialog");
const dialogContent = document.getElementById("dialogContent");
const closeDialogBtn = document.getElementById("closeDialogBtn");

//campos y mensajes
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");

const nombreMsg = document.getElementById("nombreMsg");
const apellidoMsg = document.getElementById("apellidoMsg");
const correoMsg = document.getElementById("correoMsg");

function validarNombre() {
  nombreMsg.innerText = (nombre.value.length < 2)
    ? "Debe tener al menos 2 caracteres" : "";
}

function validarApellido() {
  apellidoMsg.innerText = (apellido.value.length < 2)
    ? "Debe tener al menos 2 caracteres" : "";
}

function validarCorreo() {
  correoMsg.innerText = (!email.checkValidity())
    ? "Correo inválido" : "";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  validarNombre();
  validarApellido();
  validarCorreo();

  const valido =
    nombre.value.length >= 2 &&
    apellido.value.length >= 2 &&
    email.checkValidity();

  if (valido) {
    const telefono = document.getElementById("telefono").value;
    const dni = document.getElementById("dni").value;
    const comentario = document.getElementById("comentario").value;
    const sexo = document.querySelector('input[name="sexo"]:checked')?.value || "";

    dialogContent.innerHTML = `
      <p><strong>Nombres:</strong> ${nombre.value}</p>
      <p><strong>Apellidos:</strong> ${apellido.value}</p>
      <p><strong>Email:</strong> ${email.value}</p>
      <p><strong>Teléfono:</strong> ${telefono}</p>
      <p><strong>DNI:</strong> ${dni}</p>
      <p><strong>Sexo:</strong> ${sexo}</p>
      <p><strong>Comentario:</strong> ${comentario}</p>
    `;

    dialog.showModal();
  }
});

closeDialogBtn.addEventListener("click", () => {
  dialog.close();
  form.reset();
  nombreMsg.innerText = "";
  apellidoMsg.innerText = "";
  correoMsg.innerText = "";
});
