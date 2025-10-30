document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.lightbox-trigger img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close-btn');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');

    let currentIndex = 0;

    galleryImages.forEach((img, index) => {
        img.addEventListener('click', (e) => {
            e.preventDefault();
            currentIndex = index;
            openLightbox();
        });
    });

    function openLightbox() {
        const currentImage = galleryImages[currentIndex];
        lightbox.classList.add('active');
        lightboxImg.src = currentImage.src;
        captionText.textContent = currentImage.alt || '';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
    }

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    prevArrow.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        openLightbox();
    });

    nextArrow.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        openLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % galleryImages.length;
            openLightbox();
        } else if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
            openLightbox();
        } else if (e.key === 'Escape') {
            closeLightbox();
        }
    });
});
