import post from "../../images/footer-social/post.svg";
import linkedln from "../../images/footer-social/linkedln.svg";
import facebook from "../../images/footer-social/facebook.svg";
import instagram from "../../images/footer-social/instagram.svg";
import "./footer.css";

export function getFooter()
{
    const footer = document.createElement("footer");
    footer.className = "footer";

    const container = document.createElement("div");
    container.className = "container";

    const footerBlock = document.createElement("div");
    footerBlock.className = "footer-block";
    footerBlock.innerHTML = `
        <div class="footer-box">
            <a class="footer-link-logo" href="/home">MEDDICAL</a>
            <p class="footer-text">Leading the Way in Medical Execellence, Trusted Care.</p>
        </div>
        <div class="footer-box">
            <p class="footer-box-text">Important Links</p>
            <ul class="footer-list">
                <li class="footer-item">
                    <a class="footer-link" href="#">Appointment</a>
                </li>
                 <li class="footer-item">
                    <a class="footer-link" href="/doctord">Doctors</a>
                </li>
                 <li class="footer-item">
                    <a class="footer-link" href="/services">Services</a>
                </li>
                 <li class="footer-item">
                    <a class="footer-link" href="/about">About Us</a>
                </li>
            </ul>
        </div>
        <div class="footer-box">
            <p class="footer-box-text">Contact Us</p>
            <address class="footer-address">
                <ul class="footer-list">
                    <li class="footer-item">
                        <a class="footer-link" href="tel:237681812255">Call: (237) 681-812-255</a>
                    </li>
                    <li class="footer-item">
                        <a class="footer-link" href="mailto:fildineesoe@gmail.com">Email: fildineesoe@gmail.com</a>
                    </li>
                    <li class="footer-item">Address: 0123 Some place</li>
                    <li class="footer-item">Some country</li>
                </ul>
            </address>
        </div>
        <div class="footer-box">
            <p class="footer-box-text">Newsletter</p>
            <form class="footer-form">
                <input class="footer-input" type="text" placeholder="Enter your email address">
                <img class="footer_img-post" src="${post}" alt="Linkedln">
            </form>
        </div>
    `;

    const footerSocial = document.createElement("div");
    footerSocial.className = "footer-social";
    footerSocial.innerHTML = `
        <p class="footer-social-text">© 2021 Hospital’s name All Rights Reserved by PNTEC-LTD</p>
        <ul class="footer_list">
            <li class="footer_item">
                <a class="footer_link" href="#">
                    <img class="footer_img" src="${linkedln}" alt="Linkedln">
                </a>
            </li>
            <li class="footer_item">
                <a class="footer_link" href="#">
                    <img class="footer_img" src="${facebook}" alt="Facebook">
                </a>
            </li>
            <li class="footer_item">
                <a class="footer_link" href="#">
                    <img class="footer_img" src="${instagram}" alt="Instagram">
                </a>
            </li>
        </ul>
    `;


    footer.append(container);
    container.append(footerBlock, footerSocial);

    return footer;
}