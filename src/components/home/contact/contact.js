import phone from "../../../images/contact/phone.svg";
import location from "../../../images/contact/location.svg";
import email from "../../../images/contact/email.svg";
import hours from "../../../images/contact/hours.svg";

import "./contact.css";

export function getContact()
{
    const section = document.createElement("section");
    section.className = "section-contact";

    const container = document.createElement("div");
    container.className = "container";

    const contactBlock = document.createElement("div");
    contactBlock.className = "contact-block";
    contactBlock.innerHTML = `
        <p class="contact-block-text">Get in touch</p>
        <h2 class="contact-block-title">Contact</h2>
        <div class="contact-inner">
            <div class="contact-box">
                <img class="contact-img" src="${phone}">
                <p class="contact-box-text">Emergency</p>
                <address class="contact-address">
                    <ul class="contact-list">
                        <li class="contact-item">
                            <a class="contact-link" href="tel:237681812255">(237) 681-812-255</a>
                        </li>
                        <li class="contact-item">
                            <a class="contact-link" href="tel:237666331894">(237) 666-331-894</a>
                        </li>
                    </ul>
                </address>
            </div>
            <div class="contact-box">
                <img class="contact-img" src="${location}">
                <p class="contact-box-text">Location</p>
                <p class="contact-box_text">0123 Some place</p>
                <p class="contact-box_text">9876 Some country</p>
            </div>
            <div class="contact-box">
                <img class="contact-img" src="${email}">
                <p class="contact-box-text">Email</p>
                <address class="contact-address">
                    <ul class="contact-list">
                        <li class="contact-item">
                            <a class="contact-link" href="mailto:fildineeesoe@gmil.com">fildineeesoe@gmil.com</a>
                        </li>
                        <li class="contact-item">
                            <a class="contact-link" href="mailto:myebstudios@gmail.com">myebstudios@gmail.com</a>
                        </li>
                    </ul>
                </address>
            </div>
            <div class="contact-box">
                <img class="contact-img" src="${hours}">
                <p class="contact-box-text">Working Hours</p>
                <p class="contact-box_text">Mon-Sat 09:00-20:00</p>
                <p class="contact-box_text">Sunday Emergency only</p>
            </div>
        </div>
    `;

    section.append(container);
    container.append(contactBlock);

    return section;
}