document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const height = header.offsetHeight;
    
    console.log(`scrollTop: ${scrollTop}, height: ${height}`);
    
    if (scrollTop < height / 3) {
        header.style.backgroundImage = "url('images/color_out_lady.png')";
    } else if (scrollTop < height / 2) {
        header.style.backgroundImage = "url('images/contrast_out_lady.png')";
    } else {
        header.style.backgroundImage = "url('images/test_lady.png')";
    }
});
