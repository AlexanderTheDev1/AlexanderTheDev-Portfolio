document.getElementById("menu-toggle").addEventListener("click", function() {
    console.log("Button clicked");
    document.querySelector(".menu-wrap").classList.toggle('menu-active');
    document.querySelector("#ham-menu").classList.toggle('ham-menu2');
    this.classList.toggle('menu-rotated');
}); 
