// Sample dynamic element and event listener
document.addEventListener("DOMContentLoaded", () => {
    const welcomeMessage = document.querySelector("main h2");

    if (localStorage.getItem("visited")) {
        welcomeMessage.textContent = "Welcome back to Idaho Outdoor Explorer!";
    } else {
        localStorage.setItem("visited", "true");
        welcomeMessage.textContent = "Explore Idaho's great outdoors!";
    }

    // Lazy loading for images
    const images = document.querySelectorAll("img[data-src]");
    const loadImages = (image) => {
        image.setAttribute("src", image.getAttribute("data-src"));
        image.onload = () => {
            image.removeAttribute("data-src");
        };
    };

    const imgObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImages(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    images.forEach(img => {
        imgObserver.observe(img);
    });
});
