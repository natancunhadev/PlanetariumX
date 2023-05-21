const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    
    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})

const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  window.location.href = 'index.html'; 
  // altere "index.html" para o nome do arquivo da sua página inicial
  const logo = document.querySelector('.logo');

});







