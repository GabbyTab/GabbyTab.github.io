document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const height = header.offsetHeight;

    console.log(`scrollTop: ${scrollTop}, height: ${height}`);
    
    let imageUrl;

    if (scrollTop < height / 3) {
        imageUrl = 'images/color_out_lady.png';
    } else if (scrollTop < height / 2) {
        imageUrl = 'images/contrast_out_lady.png';
    } else {
        imageUrl = 'images/test_out_lady.png';
    }

    console.log(`Setting background image to: ${imageUrl}`);
    header.style.backgroundImage = `url('${imageUrl}?${new Date().getTime()}')`;
});
