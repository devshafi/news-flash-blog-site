// Grab elements

const selectElement = selector => {
    const element = document.querySelector(selector);
    if (element) return element

    throw new Error(
        `Something went wrong, make sure that ${selector} exists or is typed correctly`
    )
}

//Nav styles on scroll
const scrollHeader = () => {
    const headerElement = selectElement('.header');
    const HEADER_SCROLL_START_THRESHOLD = 15;
    if (this.scrollY > HEADER_SCROLL_START_THRESHOLD) {
        headerElement.classList.add('activated')
    } else[
        headerElement.classList.remove('activated')
    ]
}

window.addEventListener('scroll', scrollHeader);

const menuToggleIcon = selectElement('#menu-toggle-icon');
const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
}
menuToggleIcon.addEventListener('click', toggleMenu);


// Open menu & search pop-up

// Open/Close search form popup

// -- Close the search form popup on ESC keypress

// Switch theme/add to local storage

// Swiper