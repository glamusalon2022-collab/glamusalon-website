// Glass Navbar on Scroll

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (header) {
        if (window.scrollY > 20) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }
});
