import chckup from "../../images/services/checkup.svg";
import cardiograma from "../../images/services/cardiograma.svg";
import testing from "../../images/services/testing.svg";
import blood_bank from "../../images/services/blood-bank.svg";
import rectangle from "../../images/services/rectangle.svg";
import images1 from "../../images/services/images-1.png";
import images2 from "../../images/services/images-2.png";

import "./services.css";

export function getServices()
{
    const section = document.createElement("section");
    section.className = "section-services";

    const container = document.createElement("div");
    container.className = "container";

    const servicesBlock = document.createElement("div");
    servicesBlock.className = "services-block";
    servicesBlock.innerHTML = `
        <p class="services-text">Care you can believe in</p>
        <h2 class="services-title">Our Services</h2>
        <div class="services-box">
            <div class="services-all">
                <div class="services-chechup">
                    <img class="services-img" src="${chckup}">
                    <p class="services_text">Free Checkup</p>
                </div>
                 <div class="services-chechup">
                    <img class="services-img" src="${cardiograma}">
                    <p class="services_text">Cardiograma</p>
                </div>
                <div class="services-chechup">
                    <img class="services-img" src="${testing}">
                    <p class="services_text">Dna Testing</p>
                </div>
                <div class="services-chechup">
                    <img class="services-img" src="${blood_bank}">
                    <p class="services_text">Blood Bank</p>
                </div>
                <div class="services_chechup"> 
                    <button class="services-btn">View All</button>
                </div>
            </div>
            <div class="services-patients">
                <p class="services-passion">A passion for putting patients first.</p>
                <ul class="services-list">
                    <li class="services-item">
                        <img class="services-rectangle-img" src="${rectangle}">
                        <p class="services-item-text">A Passion for Healing</p>
                    </li>
                    <li class="services-item">
                        <img class="services-rectangle-img" src="${rectangle}">
                        <p class="services-item-text">All our best</p>
                    </li>
                    <li class="services-item">
                        <img class="services-rectangle-img" src="${rectangle}">
                        <p class="services-item-text">A Legacy of Excellence</p>
                    </li>
                    <li class="services-item">
                        <img class="services-rectangle-img" src="${rectangle}">
                        <p class="services-item-text">5-Star Care</p>
                    </li>
                    <li class="services-item">
                        <img class="services-rectangle-img" src="${rectangle}">
                        <p class="services-item-text">Believe in Us</p>
                    </li>
                    <li class="services-item">
                        <img class="services-rectangle-img" src="${rectangle}">
                        <p class="services-item-text">Always Caring</p>
                    </li>
                </ul>
                <p class="services_passion">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. 
                    Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. 
                    Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
                </p>
                <p class="services_passion">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. 
                    Convallis felis vitae tortor augue. Velit nascetur proin massa in.
                </p>
            </div>
            <div class="services-images">
                <img src="${images1}">
                <img src="${images2}">
            </div>
        </div>
    `;

    section.append(container);
    container.append(servicesBlock);

    return section;
}