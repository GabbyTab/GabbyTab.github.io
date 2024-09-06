document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const height = header.offsetHeight;
    
    if (scrollTop < height) {
        header.style.backgroundImage = "url('images/color_out_lady.png')";
    } else if (scrollTop < 2 * height) {
        header.style.backgroundImage = "url('images/contrast_out_lady.png')";
    } else {
        header.style.backgroundImage = "url('images/test_lady.png')";
    }
});
