const images = [
    "tarnow1.jpg",
    "tarnow2.jpg",
    "tarnow3.jpg",
    "tarnow4.jpg"
];

let currentImageIndex = 0;

function changeImage(direction) {
    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    const galleryImage = document.getElementById("gallery-image");
    galleryImage.style.opacity = 0; 

    setTimeout(() => {
        galleryImage.src = images[currentImageIndex];
        galleryImage.style.opacity = 1;
    }, 500);
}
