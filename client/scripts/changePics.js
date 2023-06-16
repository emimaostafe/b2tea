var images = [
    "../media/image2.jpg",
    "../media/image3.jpg",
    "../media/image4.jpg",
    "../media/image5.jpg",
    "../media/image6.jpg",
    "../media/image7.jpg"
];
var currentIndex = 0;
var currentImage = document.getElementById("currentImage");

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    currentImage.src = images[currentIndex];
}