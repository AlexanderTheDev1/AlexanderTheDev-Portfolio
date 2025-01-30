document.addEventListener('DOMContentLoaded', function() {
document.getElementById("menu-toggle").addEventListener("click", function() {
    console.log("Button clicked");
    document.querySelector(".menu-wrap").classList.toggle('menu-active');
    document.querySelector("#ham-menu").classList.toggle('ham-menu2');
    this.classList.toggle('menu-rotated');
}); 
console.log("Script.js is loaded!");
    const toggleButtons = document.querySelectorAll(".button-change");

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
    toggleButtons.forEach(toggle => {
        toggle.addEventListener('click', () => {
            let currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'light') {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }
            console.log(toggle); 
        });
    });
});
