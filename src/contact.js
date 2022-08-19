
function contactInfo() {

    const container = document.getElementById('content');
    container.replaceChildren();
    

    container.classList.add('contact');

    const contactInfoContainer = document.createElement('div');
    contactInfoContainer.classList.add('contact-info-container');
    container.appendChild(contactInfoContainer);

    const rowContainer1 = document.createElement('div');
    rowContainer1.classList.add('row1');
    const rowContainer2 = document.createElement('div');
    rowContainer2.classList.add('row2');
    const rowContainer3 = document.createElement('div');
    rowContainer3.classList.add('row3');



    const contactInfoTitle = document.createElement('h2');
    contactInfoTitle.classList.add('contact-info');
    contactInfoTitle.textContent="Come taste our carfully prepared meals:";
    contactInfoContainer.appendChild(contactInfoTitle);



    const contactInfoLocation = document.createElement('img');
    contactInfoLocation.classList.add('contact-info-svg');
    
    contactInfoLocation.src="/home/luci/repos/restaurant-page/src/location.svg";
    rowContainer1.appendChild(contactInfoLocation);
    contactInfoContainer.appendChild(rowContainer1);

    const contactInfoLocationPara = document.createElement('p');
    contactInfoLocationPara.classList.add('contact-info-para');
    contactInfoLocationPara.textContent="Alea Trandafirilor nr 29, Iasi";
    rowContainer1.appendChild(contactInfoLocationPara);
    contactInfoContainer.appendChild(rowContainer1);


    const contactInfoEmail = document.createElement('img');
    contactInfoEmail.classList.add('contact-info-svg');
    contactInfoEmail.src="/home/luci/repos/restaurant-page/src/email.svg";
    rowContainer2.appendChild(contactInfoEmail)
    contactInfoContainer.appendChild(rowContainer2);

    const contactInfoEmailPara = document.createElement('p');
    contactInfoEmailPara.classList.add('contact-info-para');
    contactInfoEmailPara.textContent="contactlucis@corporate.com";
    rowContainer2.appendChild(contactInfoEmailPara)
    contactInfoContainer.appendChild(rowContainer2);


    const contactInfoPhone = document.createElement('img');
    contactInfoPhone.classList.add('contact-info-svg');
    contactInfoPhone.src="/home/luci/repos/restaurant-page/src/phone.svg";
    rowContainer3.appendChild(contactInfoPhone)
    contactInfoContainer.appendChild(rowContainer3);

    const contactInfoPhonePara = document.createElement('p');
    contactInfoPhonePara.classList.add('contact-info-para');
    contactInfoPhonePara.textContent="+40758438751";
    rowContainer3.appendChild(contactInfoPhonePara)
    contactInfoContainer.appendChild(rowContainer3);


}

export {contactInfo};