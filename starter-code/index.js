//variable declaration

const navBtn = document.querySelector('.mobile-nav-btn');
const navBar = document.querySelector('.primary-navigation')

//Adding click functionality

navBtn.addEventListener('click', () => {
    //variable for getting attribute
    const visibility = navBar.getAttribute("data-visible");

    if(visibility === "false") {
        navBar.setAttribute("data-visible", true);
        navBtn.setAttribute("aria-expanded", true);
    }
    else {
        navBar.setAttribute("data-visible", false);
        navBtn.setAttribute("aria-expanded", false);
    }
})