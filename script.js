const menu        = document.getElementById('menu');
const mainContent = document.getElementById('main-content');

const languageSelect = document.getElementById('language');
const locationSelect = document.getElementById('location');

const menuForm    = document.getElementById('menu-form');
const menuButton  = document.getElementById('menu-submit');

const changeButton      = document.getElementById('preferences-btn');

// Set initial visibility and opactity
window.onload = function() {
    menu.style.visibility        = 'visible';
    mainContent.style.visibility = 'hidden';
    menu.style.opacity           = 1;
    mainContent.style.opacity    = 0;
}

// When Open Invitation is clicked, hide Form and show Main Content
menuButton.addEventListener('click', function(event){
    event.preventDefault();
    menu.style.visibility        = 'hidden';
    mainContent.style.visibility = 'visible';
    menu.style.opacity           = 0;
    mainContent.style.opacity    = 1;
})

// When Change Button is clicked, hide Main Content and Show Form
changeButton.addEventListener('click', function(event){
    event.preventDefault();
    menu.style.visibility        = 'visible';
    mainContent.style.visibility = 'hidden';
    menu.style.opacity           = 1;
    mainContent.style.opacity    = 0;
})

