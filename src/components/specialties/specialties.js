import specialties from "../../images/specialties.svg";

import "./specialties.css";

export function getSpecialties()
{
    const section = document.createElement("section");
    section.className = "section-specialties";

    const container = document.createElement("div");
    container.className = "container";

    const specialtiesBlock = document.createElement("div");
    specialtiesBlock.className = "specialties-block";
    specialtiesBlock.innerHTML = `
        <p class="specialties_text">Always Caring</p>
        <h2 class="specialties-title">Our Specialties</h2>
        <div class="specialties_box">
            <div class="specialties-box">
                <img class="specialties-img" src="${specialties}">
                <p class="specialties-text">Neurology</p>
            </div>
            <div class="specialties-box">
                <img class="specialties-img" src="${specialties}">
                <p class="specialties-text">Bones</p>
            </div>
            <div class="specialties-box">
                <img class="specialties-img" src="${specialties}">
                <p class="specialties-text">Oncology</p>
            </div>
            <div class="specialties-box">
                <img class="specialties-img" src="${specialties}">
                <p class="specialties-text">Otorhinolaryngology</p>
            </div>
            <div class="specialties-box">
                <img class="specialties-img" src="${specialties}">
                <p class="specialties-text">Ophthalmology</p>
            </div>
            <div class="specialties-box">
                <img class="specialties-img" src="${specialties}">
                <p class="specialties-text">Cardiovascular</p>
            </div>
            <div class="specialties-box">
                <img class="specialties-img" src="${specialties}">
                <p class="specialties-text">Pulmonology</p>
            </div>
            <div class="specialties-box">
                <img class="specialties-img" src="${specialties}">
                <p class="specialties-text">Renal Medicine</p>
            </div>
            <div class="specialties-box">
                <img class="specialties-img" src="${specialties}">
                <p class="specialties-text">Gastroenterology</p>
            </div>
            <div class="specialties-box">
                <img class="specialties-img" src="${specialties}">
                <p class="specialties-text">Urology</p>
            </div>
            <div class="specialties-box">
                <img class="specialties-img" src="${specialties}">
                <p class="specialties-text">Dermatology</p>
            </div>
            <div class="specialties-box">
                <img class="specialties-img" src="${specialties}">
                <p class="specialties-text">Gynaecology</p>
            </div>
        </div>
    `;

    section.append(container);
    container.append(specialtiesBlock);

    return section;
}