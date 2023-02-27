// PAGE BODY
const body = document.body;

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
const logoBox      = document.getElementById('logo-container');
const container0   = document.getElementById('container0');
const container1   = document.getElementById('container1');
const container2   = document.getElementById('container2');
const container3   = document.getElementById('container3');

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
    // MAIN CONTENT ELEMENTS HIDE
    mainContent.remove();
    setTimeout(() => {
        changeButton.style.visibility = 'hidden';
        changeButton.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        logoBox.style.visibility = 'hidden';
        logoBox.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        container0.style.visibility = 'hidden';
        container0.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        container1.style.visibility = 'hidden';
        container1.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        container2.style.visibility = 'hidden';
        container2.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        container3.style.visibility = 'hidden';
        container3.style.opacity    = 0;
    }, 0);
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
    menu.remove();
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
    // MAIN CONTENT ELEMENTS SHOW UP
    body.appendChild(mainContent);
    setTimeout(() => {
        changeButton.style.visibility = 'visible';
        changeButton.style.opacity    = 1;
    }, 1500);
    setTimeout(() => {
        logoBox.style.visibility = 'visible';
        logoBox.style.opacity    = 1;
    }, 2000);
    setTimeout(() => {
        container0.style.visibility = 'visible';
        container0.style.opacity    = 1;
    }, 3000);
    setTimeout(() => {
        container1.style.visibility = 'visible';
        container1.style.opacity    = 1;
    }, 4000);
    setTimeout(() => {
        container2.style.visibility = 'visible';
        container2.style.opacity    = 1;
    }, 5000);
    setTimeout(() => {
        container3.style.visibility = 'visible';
        container3.style.opacity    = 1;
    }, 6000);
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
    body.appendChild(menu);
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
    // MAIN CONTENT ELEMENTS HIDE
    mainContent.remove();
    setTimeout(() => {
        changeButton.style.visibility = 'hidden';
        changeButton.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        logoBox.style.visibility = 'hidden';
        logoBox.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        container0.style.visibility = 'hidden';
        container0.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        container1.style.visibility = 'hidden';
        container1.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        container2.style.visibility = 'hidden';
        container2.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        container3.style.visibility = 'hidden';
        container3.style.opacity    = 0;
    }, 0);
})

