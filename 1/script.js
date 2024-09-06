document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const height = header.offsetHeight;

    let imageUrl;

    if (scrollTop < height / 4) {
        imageUrl = 'images/color_out_lady.png';
    } else if (scrollTop < height / 8) {
        imageUrl = 'images/contrast_out_lady.png';
    } else {
        imageUrl = 'images/test_lady.png';
    }

    // Force repaint
    header.style.backgroundImage = 'none';
    setTimeout(() => {
        header.style.backgroundImage = `url('${imageUrl}?${new Date().getTime()}')`;
    }, 0);
});
