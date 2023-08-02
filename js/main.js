
// --- Dark Mode --- //

const btnDarkmode = document.querySelector(".btn-darkmode");

btnDarkmode.addEventListener("click", () => {
  const body = document.body;

  if (body.classList.contains("dark")) {
    body.classList.add("light");
    body.classList.remove("dark");
    btnDarkmode.innerHTML = '<i class="fa-regular fa-moon"></i>';
  } else if(body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    btnDarkmode.innerHTML = '<i class="fa-regular fa-sun"></i>';
  }
});

// --- Hour Dark Mode --- //
$(document).ready(function () {
  var date = new Date();
  var hour = date.getHours();

  if (hour > 19 || hour < 8) {
    $("body").addClass("dark");
    btnDarkmode.innerHTML = '<i class="fa-regular fa-sun"></i>';
  }
});

/* function themeNuitJour() {
  let date = new Date();
  let hour = date.getHours();
  
  if (hour > 19 || hour < 8) {
    body.classList.remove("light");
    body.classList.add("dark");
   btnDarkmode.innerHTML = '<i class="fa-regular fa-sun"></i>';
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    btnDarkmode.innerHTML = '<i class="fa-regular fa-moon"></i>';
    
  }
} */

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
