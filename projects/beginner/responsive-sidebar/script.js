const toggleBtn = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");

function toggleSubmenu(button) {
  if (!button.nextElementSibling.classList.contains("show")) {
    closeAllSubmenus();
  }

  const subMenu = button.nextElementSibling;

  subMenu.classList.toggle("show");
  button.classList.toggle("rotate");

  if (sidebar.classList.contains("close")) {
    sidebar.classList.toggle("close");
    toggleBtn.classList.toggle("rotate");
  }
}

function toggleSidebar() {
  sidebar.classList.toggle("close");
  toggleBtn.classList.toggle("rotate");

  closeAllSubmenus();
}

function closeAllSubmenus() {
  Array.from(sidebar.getElementsByClassName("show")).forEach((ul) => {
    ul.classList.remove("show");
    ul.previousElementSibling.classList.remove("rotate");
  });
}
