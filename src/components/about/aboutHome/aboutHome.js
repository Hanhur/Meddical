import "./aboutHome.css";

export function getAboutHome()
{
    const section = document.createElement("section");
    section.className = "section-about";

    const aboutBlock = document.createElement("div");
    aboutBlock.className = "about-block";
    aboutBlock.innerHTML = `
        <ul class="about-list">
            <li class="about-item">
                <a class="about-link" href="/">Home</a> /
            </li>
            <li class="about-item">
                <a class="about-link" href="/about">About</a>
            </li>
        </ul>
        <p class="about-text">About us</p>
    `;

    section.append(aboutBlock);

    return section;
}