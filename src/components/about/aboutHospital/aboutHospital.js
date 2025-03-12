import hospital from "../../../images/hospital.png";
import rectangle from "../../../images/services/rectangle.svg";

import "./aboutHospital.css";

export function getAboutHospital() 
{
    const section = document.createElement("section");
    section.className = "section-hospital";

    const container = document.createElement("div");
    container.className = "container";

    const aboutHospital = document.createElement("div");
    aboutHospital.className = "about-hospital";
    aboutHospital.innerHTML = `
        <img class="hospital-img" src="${hospital}">
        <div class="hospital-box">
            <p class="hospital-text">Welcome to Hospital name</p>
            <h1 class="hospital-title">Best Care for Your Good Health</h1>
             <ul class="hospital-list">
                <li class="hospital-item">
                    <img class="hospital-rectangle-img" src="${rectangle}">
                    <p class="hospital-item-text">A Passion for Healing</p>
                </li>
                <li class="hospital-item">
                    <img class="hospital-rectangle-img" src="${rectangle}">
                    <p class="hospital-item-text">All our best</p>
                </li>
                <li class="hospital-item">
                    <img class="hospital-rectangle-img" src="${rectangle}">
                    <p class="hospital-item-text">A Legacy of Excellence</p>
                </li>
                <li class="hospital-item">
                    <img class="hospital-rectangle-img" src="${rectangle}">
                    <p class="hospital-item-text">5-Star Care</p>
                </li>
                <li class="hospital-item">
                    <img class="hospital-rectangle-img" src="${rectangle}">
                    <p class="hospital-item-text">Believe in Us</p>
                </li>
                <li class="hospital-item">
                    <img class="hospital-rectangle-img" src="${rectangle}">
                    <p class="hospital-item-text">Always Caring</p>
                </li>
            </ul>
            <p class="hospital_passion">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. 
                Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. 
                Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
            </p>
            <p class="hospital_passion">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. 
                Convallis felis vitae tortor augue. Velit nascetur proin massa in.
            </p>
        </div>
    `;

    section.append(container);
    container.append(aboutHospital);

    return section;
}