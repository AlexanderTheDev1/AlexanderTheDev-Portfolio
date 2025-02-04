document.addEventListener('DOMContentLoaded', function() {
    console.log("Universal 1rst Script.js is loaded!");
    const toggleButtons = document.querySelectorAll(".button-change");
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
    toggleButtons.forEach(toggle => {
        toggle.addEventListener('click', () => {
            document.querySelector(".settings-panel").classList.remove('settings-panel-active');
            document.querySelector(".menu-wrap").classList.remove('menu-active');
            document.querySelector("#ham-menu").classList.remove('ham-menu2');
            document.querySelector("#menu-toggle").classList.remove('menu-rotated');
            let currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'default') {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            } else if (currentTheme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'default');
                localStorage.setItem('theme', 'default');
            } 
            console.log('toggle'); 
        });
    });
    document.querySelector(".settings").addEventListener('click', function() {
        console.log("Button clicked");
        document.querySelector('.settings-panel').classList.toggle('settings-panel-active');
        document.querySelector(".menu-wrap").classList.remove('menu-active');
        document.querySelector("#ham-menu").classList.remove('ham-menu2');
        document.querySelector("#menu-toggle").classList.remove('menu-rotated');        
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
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'default') {
                return;
            }
            console.log('applied-theme'); 
            document.documentElement.setAttribute('data-theme', 'default');
            localStorage.setItem('theme', 'default');
           });
           toggleHighContrast.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'high-contrast') {
                return;
            }
            console.log('applied-theme'); 
            document.documentElement.setAttribute('data-theme', 'high-contrast');
            localStorage.setItem('theme', 'high-contrast');
           });
           toggleGreyscale.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'greyscale') {
                return;
            }
            console.log('applied-theme');
            document.documentElement.setAttribute('data-theme', 'greyscale');
            localStorage.setItem('theme', 'greyscale');
           });
           toggleDeuteranopia.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'deuteranopia') {
                return;
            }
            console.log('applied-theme');
            document.documentElement.setAttribute('data-theme', 'deuteranopia');
            localStorage.setItem('theme', 'deuteranopia');
           });
           toggleProtanopia.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'protanopia') {
                return;
            }
            console.log('applied-theme');
            document.documentElement.setAttribute('data-theme', 'protanopia');
            localStorage.setItem('theme', 'protanopia');
           });
           toggleAchromatomaly.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'achromatomaly') {
                return;
            }
            console.log('applied-theme');
            document.documentElement.setAttribute('data-theme', 'achromatomaly');
            localStorage.setItem('theme', 'achromatomaly');
           });
           toggleTritanopia.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'tritanopia') {
                return;
            }
            console.log('applied-theme');
            document.documentElement.setAttribute('data-theme', 'tritanopia');
            localStorage.setItem('theme', 'tritanopia');
           });
           toggleMonochromacy.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'monochromacy') {
                return;
            }
            console.log('applied-theme');
            document.documentElement.setAttribute('data-theme', 'monochromacy');
            localStorage.setItem('theme', 'monochromacy');
           });
    });