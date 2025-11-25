const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg"
];

let index = 0;
const imgElement = document.getElementById("carouselImage");
const carouselBox = document.getElementById("carousel");

function updateImage() {
    imgElement.src = images[index];
}

document.getElementById("nextBtn").addEventListener("click", () => {
    index = (index + 1) % images.length;
    updateImage();
});

document.getElementById("prevBtn").addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    updateImage();
});

let slideInterval = setInterval(() => {
    index = (index + 1) % images.length;
    updateImage();
}, 3000);

carouselBox.addEventListener("mouseover", () => {
    clearInterval(slideInterval);
});

carouselBox.addEventListener("mouseout", () => {
    slideInterval = setInterval(() => {
        index = (index + 1) % images.length;
        updateImage();
    }, 3000);
});
