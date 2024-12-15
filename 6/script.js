document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const height = header.offsetHeight;
    
    // Define the intervals for each image transition
    const sectionHeight = height / 4; // Adjust this value for more or less overlap

    // Calculate opacity for image 1
    const opacity1 = Math.max(0, Math.min(1, 1 - (scrollTop / sectionHeight)));

    // Calculate opacity for image 2
    const opacity2 = Math.max(0, Math.min(1, (scrollTop / sectionHeight) - 0.5));
    
    // Calculate opacity for image 3
    const opacity3 = Math.max(0, Math.min(1, (scrollTop / sectionHeight) - 1));

    // Apply the calculated opacity to each image layer
    document.querySelector('.image1').style.opacity = opacity1;
    document.querySelector('.image2').style.opacity = opacity2;
    document.querySelector('.image3').style.opacity = opacity3;
});


function resetGifs() {
    const gifs = document.querySelectorAll('.gallery img');
    gifs.forEach(gif => {
        const src = gif.src;
        gif.src = '';
        gif.src = src;
    });
}

document.getElementById("reset-button").addEventListener("click", resetGifs);
