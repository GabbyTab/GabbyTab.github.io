document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const height = header.offsetHeight;

        const opacity1 = Math.max(0, Math.min(1, 1 - scrollTop / (height / 3)));
        const opacity2 = Math.max(0, Math.min(1, (scrollTop - height / 3) / (height / 3)));
        const opacity3 = Math.max(0, Math.min(1, (scrollTop - height / 2) / (height / 3)));

        // Update opacity for each image layer
        document.querySelector('.image1').style.opacity = opacity1;
        document.querySelector('.image2').style.opacity = opacity2;
        document.querySelector('.image3').style.opacity = opacity3;
    });
});
