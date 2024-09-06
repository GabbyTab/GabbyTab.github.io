let timeout;
document.addEventListener('scroll', function() {
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
        const header = document.getElementById('header');
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const height = header.offsetHeight;

        let imageUrl;

        if (scrollTop < height / 3) {
            imageUrl = 'images/color_out_lady.png';
        } else if (scrollTop < height / 2) {
            imageUrl = 'images/contrast_out_lady.png';
        } else {
            imageUrl = 'images/test_lady.png';
        }

        header.style.backgroundImage = `url('${imageUrl}?${new Date().getTime()}')`;
    }, 100); // Adjust timeout as needed
});
