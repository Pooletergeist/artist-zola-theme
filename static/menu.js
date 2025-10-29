// Get elements
const menuButton = document.querySelector('.menu-button');
const closeButton = document.querySelector('.close-button');
const slideMenu = document.querySelector('.slide-menu');
const backdrop = document.querySelector('.backdrop');
const expandableSection = document.querySelector('.expandable-section');
const sectionToggle = document.querySelector('.section-toggle');

// Open menu
menuButton.addEventListener('click', function() {
    slideMenu.classList.add('is-open');
    backdrop.classList.add('is-visible');
    document.body.classList.add('menu-open');
});

// Close menu
function closeMenu() {
    slideMenu.classList.remove('is-open');
    backdrop.classList.remove('is-visible');
    document.body.classList.remove('menu-open');
}

closeButton.addEventListener('click', closeMenu);
backdrop.addEventListener('click', closeMenu);

// Toggle expandable section
sectionToggle.addEventListener('click', function() {
    expandableSection.classList.toggle('is-expanded');
});

// Close menu when clicking a link
const menuLinks = document.querySelectorAll('.slide-menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Close menu on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && slideMenu.classList.contains('is-open')) {
        closeMenu();
    }
});