document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const height = header.offsetHeight;

    console.log(`scrollTop: ${scrollTop}, height: ${height}`);
    
    if (scrollTop < height / 8) {
        header.style.backgroundImage = "url('images/color_out_lady.png?" + new Date().getTime() + "')";
    } else if (scrollTop < height / 4) {
        header.style.backgroundImage = "url('images/contrast_out_lady.png?" + new Date().getTime() + "')";
    } else {
        header.style.backgroundImage = "url('images/test_lady.png?" + new Date().getTime() + "')";
    }
});
