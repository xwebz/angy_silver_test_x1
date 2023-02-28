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
const changeButtonContainer = document.getElementById('preferences-btn-container');
const changeButton          = document.getElementById('preferences-btn');
const logoBox               = document.getElementById('logo-container');
const container0Top         = document.getElementById('containerx0top');
const container1Top         = document.getElementById('containerx1top');
const container3Top         = document.getElementById('containerx3top');
const container5Top         = document.getElementById('containerx5top');
const container0            = document.getElementById('containerx0');
const container1            = document.getElementById('containerx1');
const container2            = document.getElementById('containerx2');
const container3            = document.getElementById('containerx3');
const container4            = document.getElementById('containerx4');
const container5            = document.getElementById('containerx5');
const container6            = document.getElementById('containerx6');
const container7            = document.getElementById('containerx7');

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
        changeButtonContainer.style.visibility = 'hidden';
        changeButtonContainer.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        changeButton.style.visibility = 'hidden';
        changeButton.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        logoBox.style.visibility = 'hidden';
        logoBox.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        container0Top.style.visibility = 'hidden';
        container0Top.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        container0.style.visibility = 'hidden';
        container0.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        container1Top.style.visibility = 'hidden';
        container1Top.style.opacity    = 0;
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
        container3Top.style.visibility = 'hidden';
        container3Top.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        container3.style.visibility = 'hidden';
        container3.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        container4.style.visibility = 'hidden';
        container4.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        container5Top.style.visibility = 'hidden';
        container5Top.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        container5.style.visibility = 'hidden';
        container5.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        container6.style.visibility = 'hidden';
        container6.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        container7.style.visibility = 'hidden';
        container7.style.opacity    = 0;
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
        changeButtonContainer.style.visibility = 'visible';
        changeButtonContainer.style.opacity    = 1;
    }, 1500);
    setTimeout(() => {
        changeButton.style.visibility = 'visible';
        changeButton.style.opacity    = 1;
    }, 1500);
    setTimeout(() => {
        logoBox.style.visibility = 'visible';
        logoBox.style.opacity    = 1;
    }, 2000);
    setTimeout(() => {
        container0Top.style.visibility = 'visible';
        container0Top.style.opacity    = 1;
    }, 3000);
    setTimeout(() => {
        container0.style.visibility = 'visible';
        container0.style.opacity    = 1;
    }, 3000);
    setTimeout(() => {
        container1Top.style.visibility = 'visible';
        container1Top.style.opacity    = 1;
    }, 4000);
    setTimeout(() => {
        container1.style.visibility = 'visible';
        container1.style.opacity    = 1;
    }, 4000);
    setTimeout(() => {
        container2.style.visibility = 'visible';
        container2.style.opacity    = 1;
    }, 5000);
    setTimeout(() => {
        container3Top.style.visibility = 'visible';
        container3Top.style.opacity    = 1;
    }, 6000);
    setTimeout(() => {
        container3.style.visibility = 'visible';
        container3.style.opacity    = 1;
    }, 6000);
    setTimeout(() => {
        container4.style.visibility = 'visible';
        container4.style.opacity    = 1;
    }, 7000);
    setTimeout(() => {
        container5Top.style.visibility = 'visible';
        container5Top.style.opacity    = 1;
    }, 8000);
    setTimeout(() => {
        container5.style.visibility = 'visible';
        container5.style.opacity    = 1;
    }, 8000);
    setTimeout(() => {
        container6.style.visibility = 'visible';
        container6.style.opacity    = 1;
    }, 9000);
    setTimeout(() => {
        container7.style.visibility = 'visible';
        container7.style.opacity    = 1;
    }, 10000);
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
        changeButtonContainer.style.visibility = 'hidden';
        changeButtonContainer.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        changeButton.style.visibility = 'hidden';
        changeButton.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        logoBox.style.visibility = 'hidden';
        logoBox.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        container0Top.style.visibility = 'hidden';
        container0Top.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        container0.style.visibility = 'hidden';
        container0.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        container1Top.style.visibility = 'hidden';
        container1Top.style.opacity    = 0;
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
        container3Top.style.visibility = 'hidden';
        container3Top.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        container3.style.visibility = 'hidden';
        container3.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        container4.style.visibility = 'hidden';
        container4.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        container5Top.style.visibility = 'hidden';
        container5Top.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        container5.style.visibility = 'hidden';
        container5.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        container6.style.visibility = 'hidden';
        container6.style.opacity    = 0;
    }, 0);
    setTimeout(() => {
        container7.style.visibility = 'hidden';
        container7.style.opacity    = 0;
    }, 0);
})

