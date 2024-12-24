import arrowRight from "../../images/arrow-right.svg";
import welcome_bg from "../../images/welcome-bg.png";
import "./welcomeHome.css";

export function getWelcomeHome()
{
    const section = document.createElement("section");
    section.className = "section-welcome";

    const container = document.createElement("div");
    container.className = "container";

    const welcomeBlock = document.createElement("div");
    welcomeBlock.className = "welcome-block";
    welcomeBlock.innerHTML = `
        <div class="welcome-box">
            <p class="welome-text">Welcome to Meddical</p>
            <h2 class="welcome-title">A Great Place to Receive Care</h2>
            <p class="welcome_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. 
                Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
            </p>
            <div class="welcome_box">
                <p class="welcome__text">Learn More</p>
                <img class="welcome-img" src="${arrowRight}">
            </div>
        </div>
        <img class="welcome-bg" src="${welcome_bg}">
    `;

    section.append(container);
    container.append(welcomeBlock);

    return section;
}