document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const height = header.offsetHeight;
    
    const sectionHeight = height / 4; // controls image overlap

    const opacity1 = Math.max(0, Math.min(1, 1 - (scrollTop / sectionHeight)));
    const opacity2 = Math.max(0, Math.min(1, (scrollTop / sectionHeight) - 0.5));
    const opacity3 = Math.max(0, Math.min(1, (scrollTop / sectionHeight) - 1));

    document.querySelector('.image1').style.opacity = opacity1;
    document.querySelector('.image2').style.opacity = opacity2;
    document.querySelector('.image3').style.opacity = opacity3;
});
