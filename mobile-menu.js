// FoodHub mobile menu: accessible, reliable open/close behaviour.
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const toggle = document.querySelector(".mobile-menu-toggle");
    const links = document.querySelectorAll(".nav-links a");
    if (!navbar || !toggle) return;

    const closeMenu = () => {
        navbar.classList.remove("menu-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open navigation menu");
        toggle.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
    };

    toggle.addEventListener("click", (event) => {
        event.stopPropagation();
        const open = navbar.classList.toggle("menu-open");
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
        toggle.innerHTML = open
            ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>'
            : '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
    });

    links.forEach(link => link.addEventListener("click", closeMenu));
    document.addEventListener("click", event => {
        if (!navbar.contains(event.target)) closeMenu();
    });
    document.addEventListener("keydown", event => {
        if (event.key === "Escape") closeMenu();
    });
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) closeMenu();
    });
});
