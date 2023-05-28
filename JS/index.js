/*
Page javascript
Author: Quinn McClure
*/

function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

//click event listeners
var navbarLinks = document.querySelector("#navbar a");
navbarLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        var selectId = link.getAttribute('href');
        scrollToSection(sectionId);
    });
});