import images1 from "../../../images/doctors/images1.png";
import images2 from "../../../images/doctors/images2.png";
import images3 from "../../../images/doctors/images3.png";
import linkedln from "../../../images/doctors/linkedln.svg";
import facebook from "../../../images/doctors/facebook.svg";
import instagram from "../../../images/doctors/instagram.svg";

import "./aboutDoctors.css";

export function getAboutDoctors()
{
    const section = document.createElement("section");
    section.className = "section-doctors";

    const container = document.createElement("div");
    container.className = "container";

    const doctorsBlock = document.createElement("div");
    doctorsBlock.className = "doctors-block";
    doctorsBlock.innerHTML = `
        <p class="doctors-text">Trusted Care</p>
        <h2 class="doctors-title">Our Doctors</h2>
        <div class="doctors-inner">
            <div class="doctors-box">
                <img class="doctors-img" src="${images1}" alt="">
                <p class="docrors-box-text">Doctor’s Name</p>
                <h3 class="docrors-box-title">Neurology</h3>
                <div class="doctors-social">
                    <ul class="doctors-list">
                        <li class="doctors-item">
                            <a class="doctors-link" href="#">
                                <img class="doctors-img" src="${linkedln}" alt="Linkedln">
                            </a>
                        </li>
                        <li class="doctors-item">
                            <a class="doctors-link" href="#">
                                <img class="doctors-img" src="${facebook}" alt="Facebook">
                            </a>
                        </li>
                        <li class="doctors-item">
                            <a class="doctors-link" href="#">
                                <img class="doctors-img" src="${instagram}" alt="Instagram">
                            </a>
                        </li>
                    </ul>
                </div>
                <button class="doctors-btn">View Profile</button>
            </div>
            <div class="doctors-box">
                <img class="doctors-img" src="${images2}" alt="">
                <p class="docrors-box-text">Doctor’s Name</p>
                <h3 class="docrors-box-title">Neurology</h3>
                <div class="doctors-social">
                    <ul class="doctors-list">
                        <li class="doctors-item">
                            <a class="doctors-link" href="#">
                                <img class="doctors-img" src="${linkedln}" alt="Linkedln">
                            </a>
                        </li>
                        <li class="doctors-item">
                            <a class="doctors-link" href="#">
                                <img class="doctors-img" src="${facebook}" alt="Facebook">
                            </a>
                        </li>
                        <li class="doctors-item">
                            <a class="doctors-link" href="#">
                                <img class="doctors-img" src="${instagram}" alt="Instagram">
                            </a>
                        </li>
                    </ul>
                </div>
                <button class="doctors-btn">View Profile</button>
            </div>
            <div class="doctors-box">
                <img class="doctors-img" src="${images3}" alt="">
                <p class="docrors-box-text">Doctor’s Name</p>
                <h3 class="docrors-box-title">Neurology</h3>
                <div class="doctors-social">
                    <ul class="doctors-list">
                        <li class="doctors-item">
                            <a class="doctors-link" href="#">
                                <img class="doctors-img" src="${linkedln}" alt="Linkedln">
                            </a>
                        </li>
                        <li class="doctors-item">
                            <a class="doctors-link" href="#">
                                <img class="doctors-img" src="${facebook}" alt="Facebook">
                            </a>
                        </li>
                        <li class="doctors-item">
                            <a class="doctors-link" href="#">
                                <img class="doctors-img" src="${instagram}" alt="Instagram">
                            </a>
                        </li>
                    </ul>
                </div>
                <button class="doctors-btn">View Profile</button>
            </div>
        </div>
    `;


    section.append(container);
    container.append(doctorsBlock);

    return section;
}