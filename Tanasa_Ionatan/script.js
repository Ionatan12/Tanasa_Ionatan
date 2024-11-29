document.addEventListener("DOMContentLoaded", function () {
    
    const images = document.querySelectorAll("#slideshow img");
    let currentIndex = 0;

    setInterval(() => {
        images[currentIndex].style.display = "none"; 
        currentIndex = (currentIndex + 1) % images.length; 
        images[currentIndex].style.display = "block"; 
    }, 3000);

    const monitorizareSection = document.getElementById("monitorizare");
    monitorizareSection.addEventListener("dblclick", () => {
        alert("Slideshow activat!");
    });
});