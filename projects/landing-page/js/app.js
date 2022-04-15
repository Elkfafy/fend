/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const ul = document.querySelector('#navbar_list');
const fragment = document.createDocumentFragment();
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// building the nav bar function
const buildNav = (outer, data) => {
    const fragment = document.createDocumentFragment();
    data.forEach((info) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#' + info.getAttribute('id');
        a.textContent = info.getAttribute('data-nav');
        li.appendChild(a);
        fragment.appendChild(li);
    });
    outer.appendChild(fragment);
}

// Adding class active to section when near top function
const checkActive()
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
buildNav(ul, sections);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


