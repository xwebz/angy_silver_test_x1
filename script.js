// PAGE BODY
const body = document.body;

// THE 2 BLOCKS OF THE WEBSITE: [MENU - MAIN CONTENT (3 LANGUAGES)]
const menu = document.getElementById('menu');
const mainContentEnglish = document.getElementById('main-content-english');
const mainContentFrench  = document.getElementById('main-content-french');
const mainContentSpanish = document.getElementById('main-content-spanish');

// MENU ELEMENTS
const m1             = document.getElementById('menu-logo');
const labelLanguage  = document.querySelector('label[for="language"]');
const languageSelect = document.getElementById('language');
const labelLocation  = document.querySelector('label[for="location"]');
const locationSelect = document.getElementById('location');
const menuButton     = document.getElementById('menu-submit');

// INITIAL LOAD (ONLY SHOW MENU)
window.onload = function() {
    menu.remove();
    mainContentEnglish.remove();
    mainContentFrench.remove();
    mainContentSpanish.remove();
    body.appendChild(menu);
    // -------------------------
    setTimeout(() => {
        m1.style.opacity = 1;
    }, 1000);
    setTimeout(() => {
        labelLanguage.style.opacity = 1;
    }, 1100);
    setTimeout(() => {
        languageSelect.style.opacity = 1;
    }, 1200);
    setTimeout(() => {
        labelLocation.style.opacity = 1;
    }, 1300);
    setTimeout(() => {
        locationSelect.style.opacity = 1;
    }, 1400);
    setTimeout(() => {
        menuButton.style.opacity = 1;
    }, 1500);
    // -------------------------
}

// LANGUAGE CHANGE MENU DINAMICALLY
languageSelect.addEventListener('change', function(){
    const chosenLanguage = languageSelect.value;
    if (chosenLanguage === 'english'){
        labelLanguage.textContent = "Language";
        labelLocation.textContent = "Location";
        menuButton.value          = "Open Invitation";
    }
    if (chosenLanguage === 'french'){
        labelLanguage.textContent = "Langue:";
        labelLocation.textContent = "Emplacement de l'événement:";
        menuButton.value          = "Accéder à l'invitation";
    }
    if (chosenLanguage === 'spanish'){
        labelLanguage.textContent = "Idioma:";
        labelLocation.textContent = "Ubicación del Evento:";
        menuButton.value          = "Abrir Invitación";
    }
});

// LANGUAGE / LOCATION - DEPENDENT CONTENT
menuButton.addEventListener('click', function(event){
    event.preventDefault();
    // On Menu Submit, Hide Menu and Show Invitation
    menu.remove();
    const language = languageSelect.value;
    const location = locationSelect.value;
    if (language === 'english'){
        mainContentFrench.remove();
        mainContentSpanish.remove();
        body.appendChild(mainContentEnglish);
        const txt1       = document.getElementById('text1');
        txt1.textContent = `Welcome to Our ${location} Event`;
        // MAIN CONTENT ELEMENTS
        const mc1 = document.getElementById('preferences-btn-container');
        const mc2 = document.getElementById('logo-container');
        const mc3 = document.getElementById('containerx0');
        const mc4 = document.getElementById('containerx2');
        const mc5 = document.getElementById('containerx3');
        const mc6 = document.getElementById('containerx4');
        const mc7 = document.getElementById('containerx6');
        const mc8 = document.getElementById('containerx7');
        const mc9 = document.getElementById('containerx8');
        const mc10 = document.getElementById('containerx9');
        mc1.style.opacity  = 0;
        mc2.style.opacity  = 0;
        mc3.style.opacity  = 0;
        mc4.style.opacity  = 0;
        mc5.style.opacity  = 0;
        mc6.style.opacity  = 0;
        mc7.style.opacity  = 0;
        mc8.style.opacity  = 0;
        mc9.style.opacity  = 0;
        mc10.style.opacity = 0;
        setTimeout(() => {
            mc1.style.opacity = 1;
        }, 1000);
        setTimeout(() => {
            mc2.style.opacity = 1;
        }, 1100);
        setTimeout(() => {
            mc3.style.opacity = 1;
        }, 1200);
        setTimeout(() => {
            mc4.style.opacity = 1;
        }, 1300);
        setTimeout(() => {
            mc5.style.opacity = 1;
        }, 1400);
        setTimeout(() => {
            mc6.style.opacity = 1;
        }, 1500);
        setTimeout(() => {
            mc7.style.opacity = 1;
        }, 1600);
        setTimeout(() => {
            mc8.style.opacity = 1;
        }, 1700);
        setTimeout(() => {
            mc9.style.opacity = 1;
        }, 1800);
        setTimeout(() => {
            mc10.style.opacity = 1;
        }, 1900);
        // ----------------------
        const changeButton = document.getElementById('preferences-btn');
        changeButton.addEventListener('click', function(event){
            event.preventDefault();
            menu.remove();
            mainContentEnglish.remove();
            mainContentFrench.remove();
            mainContentSpanish.remove();
            body.appendChild(menu);
            // -------------------------
            m1.style.opacity             = 0;
            labelLanguage.style.opacity  = 0;
            languageSelect.style.opacity = 0;
            labelLocation.style.opacity  = 0;
            locationSelect.style.opacity = 0;
            menuButton.style.opacity     = 0;
            // -------------------------
            setTimeout(() => {
                m1.style.opacity = 1;
            }, 1000);
            setTimeout(() => {
                labelLanguage.style.opacity = 1;
            }, 1100);
            setTimeout(() => {
                languageSelect.style.opacity = 1;
            }, 1200);
            setTimeout(() => {
                labelLocation.style.opacity = 1;
            }, 1300);
            setTimeout(() => {
                locationSelect.style.opacity = 1;
            }, 1400);
            setTimeout(() => {
                menuButton.style.opacity = 1;
            }, 1500);
            // -------------------------
        });
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxflFT8VhssRLb_lWTTlkp8Icvc_r2ydp5XPoUsKM9GSk2NNB0wcQje2INFKRYvFAv4/exec';
        const form = document.forms['submit-to-google-sheet'];
        form.addEventListener('submit', e => {
          e.preventDefault();
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                form.reset()
                //console.log('Success!', response)
                alert(`Confirmation Successful!`)
            })
            .catch(error => console.error('Error!', error.message))
        });
    }
    if (language === 'french'){
        mainContentEnglish.remove();
        mainContentSpanish.remove();
        body.appendChild(mainContentFrench);
        const txt1       = document.getElementById('text1');
        txt1.textContent = `Bienvenue à notre événement de présentation à ${location}`;
        // MAIN CONTENT ELEMENTS
        const mc1 = document.getElementById('preferences-btn-container');
        const mc2 = document.getElementById('logo-container');
        const mc3 = document.getElementById('containerx0');
        const mc4 = document.getElementById('containerx2');
        const mc5 = document.getElementById('containerx3');
        const mc6 = document.getElementById('containerx4');
        const mc7 = document.getElementById('containerx6');
        const mc8 = document.getElementById('containerx7');
        const mc9 = document.getElementById('containerx8');
        const mc10 = document.getElementById('containerx9');
        mc1.style.opacity  = 0;
        mc2.style.opacity  = 0;
        mc3.style.opacity  = 0;
        mc4.style.opacity  = 0;
        mc5.style.opacity  = 0;
        mc6.style.opacity  = 0;
        mc7.style.opacity  = 0;
        mc8.style.opacity  = 0;
        mc9.style.opacity  = 0;
        mc10.style.opacity = 0;
        setTimeout(() => {
            mc1.style.opacity = 1;
        }, 1000);
        setTimeout(() => {
            mc2.style.opacity = 1;
        }, 1100);
        setTimeout(() => {
            mc3.style.opacity = 1;
        }, 1200);
        setTimeout(() => {
            mc4.style.opacity = 1;
        }, 1300);
        setTimeout(() => {
            mc5.style.opacity = 1;
        }, 1400);
        setTimeout(() => {
            mc6.style.opacity = 1;
        }, 1500);
        setTimeout(() => {
            mc7.style.opacity = 1;
        }, 1600);
        setTimeout(() => {
            mc8.style.opacity = 1;
        }, 1700);
        setTimeout(() => {
            mc9.style.opacity = 1;
        }, 1800);
        setTimeout(() => {
            mc10.style.opacity = 1;
        }, 1900);
        // ----------------------
        const changeButton = document.getElementById('preferences-btn');
        changeButton.addEventListener('click', function(event){
            event.preventDefault();
            menu.remove();
            mainContentEnglish.remove();
            mainContentFrench.remove();
            mainContentSpanish.remove();
            body.appendChild(menu);
            // -------------------------
            m1.style.opacity             = 0;
            labelLanguage.style.opacity  = 0;
            languageSelect.style.opacity = 0;
            labelLocation.style.opacity  = 0;
            locationSelect.style.opacity = 0;
            menuButton.style.opacity     = 0;
            // -------------------------
            setTimeout(() => {
                m1.style.opacity = 1;
            }, 1000);
            setTimeout(() => {
                labelLanguage.style.opacity = 1;
            }, 1100);
            setTimeout(() => {
                languageSelect.style.opacity = 1;
            }, 1200);
            setTimeout(() => {
                labelLocation.style.opacity = 1;
            }, 1300);
            setTimeout(() => {
                locationSelect.style.opacity = 1;
            }, 1400);
            setTimeout(() => {
                menuButton.style.opacity = 1;
            }, 1500);
            // -------------------------
        });
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxflFT8VhssRLb_lWTTlkp8Icvc_r2ydp5XPoUsKM9GSk2NNB0wcQje2INFKRYvFAv4/exec';
        const form = document.forms['submit-to-google-sheet'];
        form.addEventListener('submit', e => {
            e.preventDefault();
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
              .then(response => {
                  form.reset()
                  //console.log('Success!', response)
                  alert(`Confirmation Réussie!`)
              })
              .catch(error => console.error('Error!', error.message))
          });
    }
    if (language === 'spanish'){
        mainContentEnglish.remove();
        mainContentFrench.remove();
        body.appendChild(mainContentSpanish);
        const txt1       = document.getElementById('text1');
        txt1.textContent = `Bienvenido(a) a Nuestro Evento de Presentación en ${location}`;
        // MAIN CONTENT ELEMENTS
        const mc1 = document.getElementById('preferences-btn-container');
        const mc2 = document.getElementById('logo-container');
        const mc3 = document.getElementById('containerx0');
        const mc4 = document.getElementById('containerx2');
        const mc5 = document.getElementById('containerx3');
        const mc6 = document.getElementById('containerx4');
        const mc7 = document.getElementById('containerx6');
        const mc8 = document.getElementById('containerx7');
        const mc9 = document.getElementById('containerx8');
        const mc10 = document.getElementById('containerx9');
        mc1.style.opacity  = 0;
        mc2.style.opacity  = 0;
        mc3.style.opacity  = 0;
        mc4.style.opacity  = 0;
        mc5.style.opacity  = 0;
        mc6.style.opacity  = 0;
        mc7.style.opacity  = 0;
        mc8.style.opacity  = 0;
        mc9.style.opacity  = 0;
        mc10.style.opacity = 0;
        setTimeout(() => {
            mc1.style.opacity = 1;
        }, 1000);
        setTimeout(() => {
            mc2.style.opacity = 1;
        }, 1100);
        setTimeout(() => {
            mc3.style.opacity = 1;
        }, 1200);
        setTimeout(() => {
            mc4.style.opacity = 1;
        }, 1300);
        setTimeout(() => {
            mc5.style.opacity = 1;
        }, 1400);
        setTimeout(() => {
            mc6.style.opacity = 1;
        }, 1500);
        setTimeout(() => {
            mc7.style.opacity = 1;
        }, 1600);
        setTimeout(() => {
            mc8.style.opacity = 1;
        }, 1700);
        setTimeout(() => {
            mc9.style.opacity = 1;
        }, 1800);
        setTimeout(() => {
            mc10.style.opacity = 1;
        }, 1900);
        // ----------------------
        const changeButton = document.getElementById('preferences-btn');
        changeButton.addEventListener('click', function(event){
            event.preventDefault();
            menu.remove();
            mainContentEnglish.remove();
            mainContentFrench.remove();
            mainContentSpanish.remove();
            body.appendChild(menu);
            // -------------------------
            m1.style.opacity             = 0;
            labelLanguage.style.opacity  = 0;
            languageSelect.style.opacity = 0;
            labelLocation.style.opacity  = 0;
            locationSelect.style.opacity = 0;
            menuButton.style.opacity     = 0;
            // -------------------------
            setTimeout(() => {
                m1.style.opacity = 1;
            }, 1000);
            setTimeout(() => {
                labelLanguage.style.opacity = 1;
            }, 1100);
            setTimeout(() => {
                languageSelect.style.opacity = 1;
            }, 1200);
            setTimeout(() => {
                labelLocation.style.opacity = 1;
            }, 1300);
            setTimeout(() => {
                locationSelect.style.opacity = 1;
            }, 1400);
            setTimeout(() => {
                menuButton.style.opacity = 1;
            }, 1500);
            // -------------------------
        });
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxflFT8VhssRLb_lWTTlkp8Icvc_r2ydp5XPoUsKM9GSk2NNB0wcQje2INFKRYvFAv4/exec';
        const form = document.forms['submit-to-google-sheet'];
        form.addEventListener('submit', e => {
            e.preventDefault();
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
              .then(response => {
                  form.reset()
                  //console.log('Success!', response)
                  alert(`Confirmación Exitosa!`)
              })
              .catch(error => console.error('Error!', error.message))
          });
    }
    // Date and time depending on Language and Event Location
    const txt19 = document.getElementById('text19');
    var TimeNorthYorkEnglish = "<span>" + "April 23rd, 2023" + "<br>" + "09:00 PM" + "</span>" ;
    var TimeNorthYorkFrench  = "<span>" + "Samedi, 23 avril 2023" + "<br>" + "09h30" + "</span>";
    var TimeNorthYorkSpanish = "<span>" + "Sábado, 23 de abril de 2023" + "<br>" + "9:30 AM" + "</span>";
    if (language === 'english' && location === 'North York'){
        txt19.innerHTML = TimeNorthYorkEnglish;
    }
    if (language === 'french' && location === 'North York'){
        txt19.innerHTML = TimeNorthYorkFrench;
    }
    if (language === 'spanish' && location === 'North York'){
        txt19.innerHTML = TimeNorthYorkSpanish;
    }
    var TimeCalgaryEnglish = "<span>" + "April 24th, 2023" + "<br>" + "09:30 AM" + "</span>" ;
    var TimeCalgaryFrench  = "<span>" + "Samedi, 24 avril 2023" + "<br>" + "09h30" + "</span>";
    var TimeCalgarySpanish = "<span>" + "Sábado, 24 de abril de 2023" + "<br>" + "9:30 AM" + "</span>";
    if (language === 'english' && location === 'Calgary'){
        txt19.innerHTML = TimeCalgaryEnglish;
    }
    if (language === 'french' && location === 'Calgary'){
        txt19.innerHTML = TimeCalgaryFrench;
    }
    if (language === 'spanish' && location === 'Calgary'){
        txt19.innerHTML = TimeCalgarySpanish;
    }
    var TimeMontrealEnglish = "<span>" + "Wednesday, April 19th, 2023" + "<br>" + "01:00 PM" + "</span>" ;  // Pending Validation
    var TimeMontrealFrench  = "<span>" + "Mercredi 19 avril 2023" + "<br>" + "13h00" + "</span>";           // Pending Validation
    var TimeMontrealSpanish = "<span>" + "Miércoles 19 de abril de 2023" + "<br>" + "01:00 PM" + "</span>"; // Pending Validation
    if (language === 'english' && location === 'Montreal'){
        txt19.innerHTML = TimeMontrealEnglish;
    }
    if (language === 'french' && location === 'Montreal'){
        txt19.innerHTML = TimeMontrealFrench;
    }
    if (language === 'spanish' && location === 'Montreal'){
        txt19.innerHTML = TimeMontrealSpanish;
    }
    var TimeOrangevilleEnglish = "<span>" + "April 26th, 2023" + "<br>" + "01:00 PM" + "</span>" ;           // Pending Date Only
    var TimeOrangevilleFrench  = "<span>" + "Samedi, 26 avril 2023" + "<br>" + "13h00" + "</span>";          // Pending Date Only
    var TimeOrangevilleSpanish = "<span>" + "Sábado, 26 de abril de 2023" + "<br>" + "01:00 PM" + "</span>"; // Pending Date Only
    if (language === 'english' && location === 'Orangeville'){
        txt19.innerHTML = TimeOrangevilleEnglish;
    }
    if (language === 'french' && location === 'Orangeville'){
        txt19.innerHTML = TimeOrangevilleFrench;
    }
    if (language === 'spanish' && location === 'Orangeville'){
        txt19.innerHTML = TimeOrangevilleSpanish;
    }
    // Show Event Location depending on which city the User Selected
    var addressNorthYork   = "Domenica DiLuca Community Rec Centre Stanley Park 25 - Stanley Rd. North York"; // Pending Validation
    var addressCalgary     = "555 Saddledome Rise SE, Calgary, AB T2G 2W1, Canadá";
    var addressMontreal    = "Crew Collective and CAfe 360 Rue Saint-Jacques, G101 Montréal, QC H2Y 1P5";     // Pending Validation
    var addressOrangeville = "Rustik Local Bistro (519) 940-3108";                                            // Pending Validation
    const txt20 = document.getElementById('text20');
    if (location === 'North York'){
        txt20.textContent = addressNorthYork;
    }
    if (location === 'Calgary'){
        txt20.textContent = addressCalgary;
    }
    if (location === "Montreal"){
        txt20.textContent = addressMontreal;
    }
    if (location === "Orangeville"){
        txt20.textContent = addressOrangeville;
    }
});
