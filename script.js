// ANIMASI SCROLL
const hiddenElements = document.querySelectorAll('.hidden');

window.addEventListener('scroll', () => {
    hiddenElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            el.classList.add('show');
        }
    });
});

// UPLOAD FOTO
function uploadImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function() {
        const img = document.createElement("img");
        img.src = reader.result;
        document.getElementById("preview").appendChild(img);
    }

    reader.readAsDataURL(file);
}