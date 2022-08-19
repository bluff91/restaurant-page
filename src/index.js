import  {homeFactory}  from "./home"
import {menuFactory} from "./menu"
import {contactInfo} from "./contact"

homeFactory().initializePage();

var myModule = (function(){

    const home = document.querySelector('.home');
    home.addEventListener('click', homeFactory);

    const menu = document.querySelector('.menu');
    menu.addEventListener('click', menuFactory);

    const contact = document.querySelector('.contact');
    contact.addEventListener('click', contactInfo);
    
})();




    




