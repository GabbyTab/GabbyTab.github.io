document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const height = header.offsetHeight;
    
    if (scrollTop < height) {
        header.style.backgroundImage = "url('images/title_image_1.jpg')";
    } else if (scrollTop < 2 * height) {
        header.style.backgroundImage = "url('images/title_image_2.jpg')";
    } else {
        header.style.backgroundImage = "url('images/title_image_3.jpg')";
    }
});
