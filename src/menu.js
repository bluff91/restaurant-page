import { homeFactory } from "./home";
function menuFactory() {
   
    
    const container = document.getElementById('content');
    container.replaceChildren();
    container.classList.add('menu');

// Creating the menu title
    const menuTitle = document.createElement('h1');
    menuTitle.classList.add('h1');
    menuTitle.textContent="Luci's Menu"
    container.appendChild(menuTitle);

// Creating 2 containers to store the 5 different menu items
    const sideContainer = document.createElement('div');
    sideContainer.classList.add('side-container');
    container.appendChild(sideContainer);

    const leftSide = document.createElement('div');
    leftSide.classList.add("left-side");
    sideContainer.appendChild(leftSide);
    const rightSide = document.createElement('div');
    rightSide.classList.add("right-side");
    sideContainer.appendChild(rightSide);

// Creating 5 rows
    const row1 = document.createElement('div');
    row1.classList.add('row1');
    leftSide.appendChild(row1);

    const row2 = document.createElement('div');
    row2.classList.add('row2');
    leftSide.appendChild(row2);

    const row3 = document.createElement('div');
    row3.classList.add('row3');
    leftSide.appendChild(row3);

    const row4 = document.createElement('div');
    row4.classList.add('row4');
    rightSide.appendChild(row4);

    const row5 = document.createElement('div');
    row5.classList.add('row5');
    rightSide.appendChild(row5);



        const menuItem1 = document.createElement('img');
        menuItem1.classList.add('mancare');
        menuItem1.src="/home/luci/repos/restaurant-page/src/sha.jpg";
        row1.appendChild(menuItem1);
        const paraMenuItem1 = document.createElement('p');
        paraMenuItem1.classList.add('para-mancare');
        paraMenuItem1.textContent="...";
        row1.appendChild(paraMenuItem1);

        const menuItem2 = document.createElement('img');
        menuItem2.classList.add('mancare');
        menuItem2.src="/home/luci/repos/restaurant-page/src/radauteana.jpg";
        row2.appendChild(menuItem2);
        const paraMenuItem2 = document.createElement('p');
        paraMenuItem2.classList.add('para-mancare');
        paraMenuItem2.textContent="...";
        row2.appendChild(paraMenuItem2);

        const menuItem3 = document.createElement('img');
        menuItem3.classList.add('mancare');
        menuItem3.src="/home/luci/repos/restaurant-page/src/coaste.jpg";
        row3.appendChild(menuItem3);
        const paraMenuItem3 = document.createElement('p');
        paraMenuItem3.classList.add('para-mancare');
        paraMenuItem3.textContent="...";
        row3.appendChild(paraMenuItem3);

        const menuItem4 = document.createElement('img');
        menuItem4.classList.add('mancare');
        menuItem4.src="/home/luci/repos/restaurant-page/src/pizza.jpg";
        row4.appendChild(menuItem4);
        const paraMenuItem4 = document.createElement('p');
        paraMenuItem4.classList.add('para-mancare');
        paraMenuItem4.textContent="...";
        row4.appendChild(paraMenuItem4);

        const menuItem5 = document.createElement('img');
        menuItem5.classList.add('mancare');
        menuItem5.src="/home/luci/repos/restaurant-page/src/papanasi.jpg";
        row5.appendChild(menuItem5);
        const paraMenuItem5 = document.createElement('p');
        paraMenuItem5.classList.add('para-mancare');
        paraMenuItem5.textContent="...";
        row5.appendChild(paraMenuItem5);


};

export {menuFactory};