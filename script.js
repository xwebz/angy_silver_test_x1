// THE 2 BLOCKS OF THE WEBSITE: [MENU - MAIN CONTENT]
const menu        = document.getElementById('menu');
const mainContent = document.getElementById('main-content');

// MENU ELEMENTS: [LOGO - FORM - FORM ELEMENTS]
const menuLogo       = document.getElementById('menu-logo');
const menuForm       = document.getElementById('menu-form');
const labelLanguage  = document.querySelector('label[for="language"]');
const languageSelect = document.getElementById('language');
const labelLocation  = document.querySelector('label[for="location"]');
const locationSelect = document.getElementById('location');
const menuButton     = document.getElementById('menu-submit');

// MAIN CONTENT ELEMENTS: [CHANGE PREFERENCES BUTTON - CONTAINER WITH LOGO - ETC..................]
const changeButton = document.getElementById('preferences-btn');

// INITIAL VISIBILITY AND OPACITY
window.onload = function() {
    // 2 BLOCKS VISIBILITY
    menu.style.visibility        = 'visible';
    menu.style.opacity           = 1;
    mainContent.style.visibility = 'hidden';
    mainContent.style.opacity    = 0;
    // MENU ELEMENTS SHOW UP
    setTimeout(() => {
        menuLogo.style.visibility = 'visible';
        menuLogo.style.opacity    = 1;
    }, 2000);
    setTimeout(() => {
        labelLanguage.style.visibility  = 'visible';
        labelLanguage.style.opacity     = 1;
    }, 3000);
    setTimeout(() => {
        languageSelect.style.visibility = 'visible';
        languageSelect.style.opacity    = 1;
    }, 4000);
    setTimeout(() => {
        labelLocation.style.visibility = 'visible';
        labelLocation.style.opacity    = 1;
    }, 5000);
    setTimeout(() => {
        locationSelect.style.visibility = 'visible';
        locationSelect.style.opacity    = 1;
    }, 6000);
    setTimeout(() => {
        menuButton.style.visibility = 'visible';
        menuButton.style.opacity = 1;
    }, 7000);
}

// VISIBILITY AND OPACITY AFTER "OPEN INVITATION" IS CLICKED
menuButton.addEventListener('click', function(event){
    event.preventDefault();
    // 2 BLOCKS VISIBILITY
    menu.style.visibility        = 'hidden';
    menu.style.opacity           = 0;
    mainContent.style.visibility = 'visible';
    mainContent.style.opacity    = 1;
    // MENU ELEMENTS HIDE
    setTimeout(() => {
        menuLogo.style.visibility = 'hidden';
        menuLogo.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        labelLanguage.style.visibility  = 'hidden';
        labelLanguage.style.opacity     = 0;
    }, 0);
    setTimeout(() => {
        languageSelect.style.visibility = 'hidden';
        languageSelect.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        labelLocation.style.visibility = 'hidden';
        labelLocation.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        locationSelect.style.visibility = 'hidden';
        locationSelect.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        menuButton.style.visibility = 'hidden';
        menuButton.style.opacity = 0;
    }, 0);
})

// VISIBILITY AND OPACITY AFTER "CHANGE LANGUAGE / LOCATION" IS CLICKED
changeButton.addEventListener('click', function(event){
    event.preventDefault();
    // 2 BLOCKS VISIBILITY
    menu.style.visibility        = 'visible';
    menu.style.opacity           = 1;
    mainContent.style.visibility = 'hidden';
    mainContent.style.opacity    = 0;
    // MENU ELEMENTS SHOW UP
    setTimeout(() => {
        menuLogo.style.visibility = 'visible';
        menuLogo.style.opacity    = 1;
    }, 2000);
    setTimeout(() => {
        labelLanguage.style.visibility  = 'visible';
        labelLanguage.style.opacity     = 1;
    }, 3000);
    setTimeout(() => {
        languageSelect.style.visibility = 'visible';
        languageSelect.style.opacity    = 1;
    }, 4000);
    setTimeout(() => {
        labelLocation.style.visibility = 'visible';
        labelLocation.style.opacity    = 1;
    }, 5000);
    setTimeout(() => {
        locationSelect.style.visibility = 'visible';
        locationSelect.style.opacity    = 1;
    }, 6000);
    setTimeout(() => {
        menuButton.style.visibility = 'visible';
        menuButton.style.opacity = 1;
    }, 7000);
})

