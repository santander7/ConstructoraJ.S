// ===== ABRIR / CERRAR MENÚ HAMBURGUESA =====
const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu");

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("activo");
  btnMenu.classList.toggle("abierto"); // Para animación del ícono
});

// ===== SUBMENÚS EN CELULAR =====
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((drop) => {
  drop.addEventListener("click", (e) => {
    // Solo funciona en pantallas pequeñas
    if (window.innerWidth <= 768) {
      e.preventDefault();

      const submenu = drop.querySelector(".submenu");

      // Cerrar submenús abiertos antes
      document.querySelectorAll(".submenu.activo").forEach((openMenu) => {
        if (openMenu !== submenu) {
          openMenu.classList.remove("activo");
        }
      });

      // Abrir / cerrar el submenú actual
      submenu.classList.toggle("activo");
    }
  });
});



