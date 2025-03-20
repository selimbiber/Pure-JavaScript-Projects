document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeButton = document.getElementById('close');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const fullSizeImageUrl = item.src.replace('-thumbnail', '');
            lightboxImage.src = fullSizeImageUrl;
            lightbox.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});