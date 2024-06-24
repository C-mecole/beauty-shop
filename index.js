var slider = tns({
    container: '#carousel-wrapper',
    items: 4,
    gutter: 25,
    slideBy: '1',
    autoplay: true,
    speed: 500,
    autoplayButtonOutput: false,
    mouseDrag: true,
    autoplayHoverPause: true,
    controls: false,
    nav: true,
    navPosition: 'bottom',

    responsive: {
    0: {
        items:1,
    },
    640: {
        edgePadding: 20,
        gutter: 20,
        items: 2
    },
    700: {
        gutter: 30
    },
    900: {
        items: 3
    },
    1000: {
        items: 4
    }
    }
});

window.addEventListener("load", () => {
        const loader = document.querySelector(".loader");
    
        loader.classList.add("loader--hidden");
    
        loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
        });
    });

const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    })
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));