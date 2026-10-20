document.addEventListener("DOMContentLoaded", function () {
  const btnCerrar = document.getElementById("btnCerrar");
  const dialog = document.getElementById("cerrarSesionDialog");
  const confirmBtn = document.getElementById("confirmCerrar");
  const cancelBtn = document.getElementById("cancelCerrar");

  if (btnCerrar && dialog) {
    btnCerrar.addEventListener("click", () => {
      dialog.showModal();
    });

    confirmBtn.addEventListener("click", () => {
      window.location.href = "login.html";
    });

    cancelBtn.addEventListener("click", () => {
      dialog.close();
    });

    window.addEventListener("keydown", e => {
      if (e.key === "Escape") dialog.close();
    });

    window.addEventListener("click", e => {
      if (e.target === dialog) dialog.close();
    });
  }
});
