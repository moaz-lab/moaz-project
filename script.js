function toggleMenu() {
    const navLinks = document.querySelector("header ul");
    navLinks.classList.toggle("active");
}

function showDetails(city) {
    alert(`Discover amazing places in ${city}!`);
}
