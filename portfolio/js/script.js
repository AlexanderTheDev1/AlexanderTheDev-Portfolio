document.addEventListener('DOMContentLoaded', function() {
    console.log("Mobile Button Script.js is loaded!");
document.getElementById("menu-toggle").addEventListener("click", function() {
    console.log("Button clicked");
    document.querySelector(".menu-wrap").classList.toggle('menu-active');
    document.querySelector("#ham-menu").classList.toggle('ham-menu2');
    this.classList.toggle('menu-rotated');
}); 
console.log("Universal 1rst Script.js is loaded!");
    const toggleButtons = document.querySelectorAll(".button-change");
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
    toggleButtons.forEach(toggle => {
        toggle.addEventListener('click', () => {
            let currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'light' || currentTheme === 'default') {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            } else if (currentTheme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            } 
            console.log('toggle'); 
        });
    });
    document.querySelector(".settings").addEventListener('click', function() {
        console.log("Button clicked");
        document.querySelector('.settings-panel').classList.toggle('settings-panel-active');
    });
    
    console.log("Universal 2nd Script.js is loaded!");
    const toggleDefault = document.querySelector('.default');
    const toggleHighContrast = document.querySelector('.high-contrast');
    const toggleGreyscale = document.querySelector('.greyscale');
    const toggleDeuteranopia = document.querySelector('.deuteranopia');
    const toggleProtanopia = document.querySelector('.protanopia');
    const toggleAchromatomaly = document.querySelector('.achromatomaly');
    const toggleTritanopia = document.querySelector('.tritanopia');
    const toggleMonochromacy = document.querySelector('.monochromacy');
    
    const accessTheme = localStorage.getItem('theme'); 
    if (accessTheme) {
        document.documentElement.setAttribute('data-theme', accessTheme);
    }
    
    toggleDefault.addEventListener('click', () => {
        currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme != 'light' && currentTheme != 'default') {
            document.documentElement.setAttribute('data-theme', 'default');
            localStorage.setItem('theme', 'default');
        } 
        console.log(toggleDefault);
       });
    
    toggleHighContrast.addEventListener('click', () => {
         currentTheme = document.documentElement.getAttribute('data-theme');
         if (currentTheme != 'high-contrast') {
             document.documentElement.setAttribute('data-theme', 'high-contrast');
             localStorage.setItem('theme', 'high-contrast');
         } 
         console.log(toggleHighContrast);
        });
     toggleGreyscale.addEventListener('click', () => {
         currentTheme = document.documentElement.getAttribute('data-theme');
         if (currentTheme != 'greyscale') {
             document.documentElement.setAttribute('data-theme', 'greyscale');
             localStorage.setItem('theme', 'greyscale');
         } 
         console.log(toggleGreyscale);
        });
     toggleDeuteranopia.addEventListener('click', () => {
         currentTheme = document.documentElement.getAttribute('data-theme');
         if (currentTheme != 'deuteranopia') {
             document.documentElement.setAttribute('data-theme', 'deuteranopia');
             localStorage.setItem('theme', 'deuteranopia');
         } 
         console.log(toggleDeuteranopia);
        });
     toggleProtanopia.addEventListener('click', () => {
         currentTheme = document.documentElement.getAttribute('data-theme');
         if (currentTheme != 'protanopia') {
             document.documentElement.setAttribute('data-theme', 'protanopia');
             localStorage.setItem('theme', 'protanopia');
         } 
         console.log(toggleProtanopia);
        });
     toggleAchromatomaly.addEventListener('click', () => {
         currentTheme = document.documentElement.getAttribute('data-theme');
         if (currentTheme != 'achromatomaly') {
             document.documentElement.setAttribute('data-theme', 'achromatomaly');
             localStorage.setItem('theme', 'achromatomaly');
         } 
         console.log(toggleAchromatomaly);
        });
     toggleTritanopia.addEventListener('click', () => {
         currentTheme = document.documentElement.getAttribute('data-theme');
         if (currentTheme != 'tritanopia') {
             document.documentElement.setAttribute('data-theme', 'tritanopia');
             localStorage.setItem('theme', 'tritanopia');
         } 
         console.log(toggleTritanopia);
        });
     toggleMonochromacy.addEventListener('click', () => {
         currentTheme = document.documentElement.getAttribute('data-theme');
         if (currentTheme != 'monochromacy') {
             document.documentElement.setAttribute('data-theme', 'monochromacy');
             localStorage.setItem('theme', 'monochromacy');
         } 
         console.log(toggleMonochromacy);
        });
});
