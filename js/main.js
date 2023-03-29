

// --- Dark Mode --- //

const btnDarkmode = document.querySelector(".btn-darkmode");

btnDarkmode.addEventListener("click", () => {
  const body = document.body;

  if (body.classList.contains("dark")) {
    body.classList.add("light");
    body.classList.remove("dark");
    btnDarkmode.innerHTML = '<i class="fa-regular fa-moon"></i>';
  } else if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    btnDarkmode.innerHTML = '<i class="fa-regular fa-sun"></i>';
  }
});

function themeNuitJour() {
  const date = new Date();
  const hour = date.getHours();

  if (hour > 5 || hour < 19) {
    document.documentElement.style.setProperty("--ecriture", "#333");
    document.documentElement.style.setProperty("--fond", "#f1f1f1");
  } else {
    document.documentElement.style.setProperty("--ecriture", "#f1f1f1");
    document.documentElement.style.setProperty("--fond", "#333");
  }
}

themeNuitJour();

// --- Barre de scroll --- //

window.onload = () => {
  window.addEventListener("scroll", () => {
    let height = document.documentElement.scrollHeight - window.innerHeight;
    let position = window.scrollY;
    let width = document.documentElement.clientWidth;

    let scroll = (position / height) * width;

    const scrollbar = document.getElementById("scrollbar");

    scrollbar.style.width = scroll + "px";
  });
};

// --- Empêcher le Copier/Coller --- //

$(document).ready(function () {
  $("body").bind("cut copy", function (e) {
    e.preventDefault();
  });
});

// --- Empêcher le Clic Droit --- //

$(document).ready(function () {
  $("body").on("contextmenu", function (e) {
    return false;
  });
});