'use strict';

const addEventOnElements = function (elements, eventType, callback) {
    console.log("asdf:  " + elements);
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
console.log(navToggler.innerHTML);
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    console.log("Toggle");
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements([navToggler], "click", toggleNavbar);