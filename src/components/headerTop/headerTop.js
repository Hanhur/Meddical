import phone from "../../images/headerTop/phone.svg";
import hour from "../../images/headerTop/hour.svg";
import location from "../../images/headerTop/location.svg";
import "./headerTop.css";

export function getHeaderTop()
{
    const headerTop = document.createElement("div");
    headerTop.className = "header-top";
    headerTop.innerHTML = `
        <a class="block-text" href="#">MED<span class="block-span">DICAL</span></a>
        <div class="top-block">
            <div class="block-box">
                <img class="box-img" src="${phone}" alt="">
                <div class="box-phone">
                    <p class="box-text">Emergency</p>
                    <a class="box_phone" href="mailto:237681812255">(237) 681-812-255</a>
                </div>
            </div>
            <div class="block-box">
                <img class="box-img" src="${hour}" alt="">
                <div class="box-hour">
                    <p class="box-text">Work Hour</p>
                    <p class="box_hour">09:00 - 20:00 Everyday</p>
                </div>
            </div>
            <div class="block-box">
                <img class="box-img" src="${location}" alt="">
                <div class="box-location">
                    <p class="box-text">Location</p>
                    <p class="box_location">0123 Some Place</p>
                </div>
            </div>
        </div>
    `;

    return headerTop;
}