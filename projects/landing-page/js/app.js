/* getting some global elements */

const ul = document.querySelector('#navbar__list');         // The main container of nav links
const sections = document.querySelectorAll('section');      // All sections in the file.

/***********************************/
/* building some helper functions */
/*********************************/

// building the nav anchors click handler
const clickHandler = evnt => {
    evnt.preventDefault();                                                              // prevent the links from their functionality
    const section = document.querySelector('#' + evnt.currentTarget.classList[1]);      // select the section of the link
    section.scrollIntoView({                                                            // scroll the view into that section
        behavior: 'smooth'
    });
};

// building the nav bar function
const buildNav = (container, sections) => {
    const fragment = document.createDocumentFragment();     // Creating Fragment
    sections.forEach((section) => {                         // iterating on every section in sections
        const li = document.createElement('li');            // creating 'li' element
        const a = document.createElement('a');              // creating 'a' element
        const ID = section.getAttribute('id');              // select the 'id' attribute of the section
        const NAME = section.getAttribute('data-nav');      // select the 'data-nav' attribute of the section
        a.href = '#' + ID;                                  // give the 'a' element href attribute the link to the section
        a.classList.add("menu__link");                      // give the 'a' element the style
        a.classList.add(ID);                                // give the 'a' element a class that is specefic to the section that it points to.
        a.textContent = NAME;                               // setting the 'a' element its text content.
        a.addEventListener('click', clickHandler);          // handling click on the 'a' element
        li.appendChild(a);                                  // append the 'a' element to the 'li' element.
        fragment.appendChild(li);                           // append the 'li' element to the FRAGMENT.
    }); 
    
    container.appendChild(fragment);                        // rebuild the website with the new content
};

// getting a section from iteration for all sections and add 'active' class to link and 'animate-active' class to the section if the section in the view.
const activeHandler = (section) => {
    const TOP = section.getBoundingClientRect().top;    // select the top of the section.
    
    const ID = section.getAttribute('id');              // read the id value of the section.
    const anchor = document.querySelector('.' + ID);    // select the anchor with the class value of the id of the section.
    
    // check if the TOP value in specific range : if True : the section in the view : if False : the section isn't in the view.
    if (TOP > -10 && TOP <= 400) {
        // if True : add class 'animate-active'(class that highlights and makes animation to the section) to the section and add class 'active'(class that highlights the anchor) to the anchor that points to the section.
        section.classList.add('animate-active');
        anchor.classList.add('active');
    } else {
        // if False : remove class 'animate-active'(class that highlights and makes animation to the section) to the section and remove class 'active'(class that highlights the anchor) to the anchor that points to the section.
        section.classList.remove('animate-active');
        anchor.classList.remove('active');
    }
};

// adding 'active' class to the section when it beacome near of top of viewport.
const makeActive = evnt => {
    const sectionLinks = document.querySelectorAll('#navbar__list li a');   // select all links of the nav bar
    sections.forEach(activeHandler);                                        // iterating for each link and handle each iterate with 'activeHandler'.
};

/* Main Functions */

// build the nav bar
buildNav(ul, sections);

// Add event listner to scrolling of the page making if section in a view make it having animation and its button to highlight.
window.addEventListener('scroll', makeActive);

