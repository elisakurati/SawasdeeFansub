document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('#episode-list a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const videoUrl = this.getAttribute('href');
            window.open(videoUrl, '_blank');
        });
    });
});
