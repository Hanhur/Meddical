import vector from "../../../images/vector.svg";
import "./aboutComment.css";

export function getAboutComment()
{
    const section = document.createElement("section");
    section.className = "section-comment";

    const container = document.createElement("div");
    container.className = "container";

    const aboutComment = document.createElement("div");
    aboutComment.className = "about-comment";
    aboutComment.innerHTML = `
        <img class="comment-img" src="${vector}">
        <p class="comment-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Quisque placerat scelerisque tortor ornare ornare. 
            Quisque placerat scelerisque felis vitae tortor augue. 
            Velit nascetur Consequat faucibus porttitor enim et.
        </p>
        <span class="comment-athor">John Doe</span>
    `;

    section.append(container);
    container.append(aboutComment);

    return section;
}