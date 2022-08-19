import { menuFactory } from "./menu";

export function homeFactory() {
    

    const container = document.getElementById('content');
    container.replaceChildren();
    
    function initializePage() {
        createBackground();
        createLPText();
        createButton();
    }

    

    function createBackground() {  
        container.style.backgroundImage="url(/home/luci/repos/restaurant-page/src/bck2.jpg)";
        container.style.backgroundSize="cover";
        
    }
    
    function createLPText() {
        const mainTitle = document.createElement('h1');
        mainTitle.classList.add('mainTitle');
        mainTitle.textContent="Welcome to Luci's restaurant";
        container.appendChild(mainTitle);

        const paragraph1 = document.createElement('p');
        paragraph1.classList.add('paragraph1');
        paragraph1.textContent="Take a look through our menu...";
        container.appendChild(paragraph1);
    }

    function createButton() {
        const mainButton = document.createElement('button');
        mainButton.classList.add('button');
        mainButton.textContent="MENU";
        container.appendChild(mainButton);
        mainButton.addEventListener('click', menuFactory);
     }
     
    createLPText();
    createButton();

    return {
        createBackground,
        createLPText,
        container,
        createButton,
        initializePage, 
    }
 };
 

