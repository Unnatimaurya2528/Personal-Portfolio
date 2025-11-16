// Responsive nav toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Optional: Submenu toggling for Goals & Memories
const goalBtn = document.querySelectorAll('.goal-btn');
goalBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const submenu = btn.nextElementSibling;
        submenu.classList.toggle('show');
    });
});

const memoryBtn = document.querySelectorAll('.memory-btn');
memoryBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const submenu = btn.nextElementSibling;
        submenu.classList.toggle('show');
    });
});