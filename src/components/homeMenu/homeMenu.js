import "./homeMenu.css";
import calendar from "../../images/book/calendar.svg";
import team from "../../images/book/team.svg";
import cash from "../../images/book/cash.svg";

export function getHomeMenu() {
    const section = document.createElement("section");
    section.className = "section-home";

    const container = document.createElement("div");
    container.className = "container";

    const homeBlock = document.createElement("div");
    homeBlock.className = "home-block";
    homeBlock.innerHTML = `
        <p class="home-block-text">Caring for Life</p>
        <h1 class="home-block-title">Leading the Way<br>in Medical Excellence</h1>
        <button class="home-block-btn">Our Services</button>
    `;

    const bookBlock = document.createElement("div");
    bookBlock.className = "book-block";
    bookBlock.innerHTML = `
            <div class="book-box book-1">
                <p class="book-text">Book an Appointment</p>
                <img class="book-img" src="${calendar}">
            </div>
            <div class="book-box book-2">
                <p class="book-text">Book an Appointment</p>
                <img class="book-img" src="${team}">
            </div>
            <div class="book-box book-3">
                <p class="book-text">Book an Appointment</p>
                <img class="book-img" src="${cash}">
            </div>
        `;

    section.append(container);
    container.append(homeBlock, bookBlock);

    return section;
}