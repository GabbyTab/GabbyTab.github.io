document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const height = header.offsetHeight;

    const opacity1 = Math.max(0, Math.min(1, 1 - scrollTop / (height / 3)));
    const opacity2 = Math.max(0, Math.min(1, (scrollTop - height / 3) / (height / 3)));

    // Adjust opacity for the images
    header.querySelector('::before').style.opacity = opacity1;
    header.querySelector('::after').style.opacity = opacity2;
});
