document.addEventListener("DOMContentLoaded", function() {
    // Array of image file names
    var images = [
        "Main2.png",
        "Main3.png",
        "img11.png",
        "img2.jpg",
        "img3.jpg",
        "img44.png"
        // Add more image file names as needed
    ];

    // Select a random image from the array
    var randomImage = images[Math.floor(Math.random() * images.length)];

    // Set the background image of the #mascot element
    var mascotElement = document.getElementById('mascot');
    mascotElement.style.backgroundImage = 'url("img/' + randomImage + '")';
});