document.addEventListener('DOMContentLoaded', () => {
    const links = document.getElementsByTagName('a');
    Array.from(links).forEach((link) => {
        link.addEventListener('click', (event) => {
            if (link.hash) {
                // prevent default
                event.preventDefault();

                // scrollIntoView not working
                link.scrollIntoView(true);

                // update hash
                window.location.hash = link.hash;
            }
        });
    });
});
