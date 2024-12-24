import calendar from "../../images/book/calendar.svg";
import team from "../../images/book/team.svg";
import cash from "../../images/book/cash.svg";

import "./book.css";

export function getBook()
{
    const container = document.createElement("div");
    container.className = "container";

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

    container.append(bookBlock);

    return container;
}