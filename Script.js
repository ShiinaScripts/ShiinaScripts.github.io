document.addEventListener("DOMContentLoaded", function() {
    // Array of image file names
    var images = [
        "Main3.png",
        "img11.png",
        "img2.jpg",
        "img3.jpg",
        "img44.png"
        // Add more image file names as needed
    ];

   // Function to set a random image
    function setRandomImage() {
        var randomImage = images[Math.floor(Math.random() * images.length)];
        var mascotElement = document.getElementById('mascot');
        mascotElement.style.backgroundImage = 'url("../img/' + randomImage + '")';
    }

    // Set the initial random image
    setRandomImage();

    // Change the image every 10 seconds
    setInterval(setRandomImage, 10000);
});
