import "./homeMenu.css";

export function getHomeMenu() 
{
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

    section.append(container);
    container.append(homeBlock);

    return section;
}