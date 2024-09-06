document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (!header) return; // Ensure header exists

        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const height = header.offsetHeight;

        const opacity1 = Math.max(0, Math.min(1, 1 - scrollTop / (height / 3)));
        const opacity2 = Math.max(0, Math.min(1, (scrollTop - height / 3) / (height / 3)));

        // Update CSS properties for pseudo-elements
        header.style.setProperty('--opacity1', opacity1);
        header.style.setProperty('--opacity2', opacity2);
    });
});
