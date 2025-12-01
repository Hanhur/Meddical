import servicesListPng from "../../../images/services/services-list.png";
import arrowRight from "../../../images/arrow-right.svg";

import "./servicesList.css";

export function getServicesList() {
    const section = document.createElement("section");
    section.className = "section-list";

    const container = document.createElement("div");
    container.className = "container";

    const servicesList = document.createElement("div");
    servicesList.className = "services-list";
    servicesList.innerHTML = `
        <ul class="services_list">
            <li class="services_list-item">
                <img class="services_img" src="${servicesListPng}">
                <div class="services_box">
                    <h2 class="services_title">Free Checkup</h2>
                    <p class="services__text">Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.</p>
                    <div class="welcome__box">
                        <p class="welcome-text">Learn More</p>
                        <img class="welcome-img" src="${arrowRight}">
                    </div>
                </div>
            </li>
           <li class="services_list-item">
                <img class="services_img" src="${servicesListPng}">
                <div class="services_box">
                    <h2 class="services_title">Free Checkup</h2>
                    <p class="services__text">Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.</p>
                    <div class="welcome__box">
                        <p class="welcome-text">Learn More</p>
                        <img class="welcome-img" src="${arrowRight}">
                    </div>
                </div>
            </li>
            <li class="services_list-item">
                <img class="services_img" src="${servicesListPng}">
                <div class="services_box">
                    <h2 class="services_title">Free Checkup</h2>
                    <p class="services__text">Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.</p>
                    <div class="welcome__box">
                        <p class="welcome-text">Learn More</p>
                        <img class="welcome-img" src="${arrowRight}">
                    </div>
                </div>
            </li>
            <li class="services_list-item">
                <img class="services_img" src="${servicesListPng}">
                <div class="services_box">
                    <h2 class="services_title">Free Checkup</h2>
                    <p class="services__text">Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.</p>
                    <div class="welcome__box">
                        <p class="welcome-text">Learn More</p>
                        <img class="welcome-img" src="${arrowRight}">
                    </div>
                </div>
            </li>
            <li class="services_list-item">
                <img class="services_img" src="${servicesListPng}">
                <div class="services_box">
                    <h2 class="services_title">Free Checkup</h2>
                    <p class="services__text">Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.</p>
                    <div class="welcome__box">
                        <p class="welcome-text">Learn More</p>
                        <img class="welcome-img" src="${arrowRight}">
                    </div>
                </div>
            </li>
            <li class="services_list-item">
                <img class="services_img" src="${servicesListPng}">
                <div class="services_box">
                    <h2 class="services_title">Free Checkup</h2>
                    <p class="services__text">Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.</p>
                    <div class="welcome__box">
                        <p class="welcome-text">Learn More</p>
                        <img class="welcome-img" src="${arrowRight}">
                    </div>
                </div>
            </li>
        </ul>
    `;

    section.append(container);
    container.append(servicesList);

    return section;
}