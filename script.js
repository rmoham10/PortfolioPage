function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const buttons = document.querySelectorAll('.btn-container .btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.add('clicked');

    // handle existing actions

    setTimeout(() => btn.classList.remove('clicked'), 5000);
  });
});