console.log("Script.js is loaded!");
document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll(".button-change"); // Select both buttons

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
