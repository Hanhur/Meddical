import images from "../../../images/newsInformation/images.png";
import eye from "../../../images/newsInformation/eye.svg";
import heart from "../../../images/newsInformation/heart.svg";

import "./aboutNews.css";

export function getAboutNews()
{
    const section = document.createElement("section");
    section.className = "section-news";

    const container = document.createElement("div");
    container.className = "container";

    const newsBlock = document.createElement("div");
    newsBlock.className = "news-block";
    newsBlock.innerHTML = `
        <p class="news-block-text">Better information, Better health</p>
        <h2 class="news-block-title">News</h2>
        <div class="news-inner">
            <div class="news-box">
                <img class="news-img" src="${images}">
                <div class="news-comment">
                    <p class="news-comment-text">Monday 05, September 2021 | By Author</p>
                    <p class="news-comment_text">This Article’s Title goes Here, but not too long.</p>
                    <div class="news-rating">
                        <img class="news-img" src="${eye}">
                        <span class="news-span">68</span>
                        <img class="news-img" src="${heart}">
                        <span class="news-span">86</span>
                    </div>
                </div>
            </div>
            <div class="news-box">
                <img class="news-img" src="${images}">
                <div class="news-comment">
                    <p class="news-comment-text">Monday 05, September 2021 | By Author</p>
                    <p class="news-comment_text">This Article’s Title goes Here, but not too long.</p>
                    <div class="news-rating">
                        <img class="news-img" src="${eye}">
                        <span class="news-span">68</span>
                        <img class="news-img" src="${heart}">
                        <span class="news-span">86</span>
                    </div>
                </div>
            </div>
            <div class="news-box">
                <img class="news-img" src="${images}">
                <div class="news-comment">
                    <p class="news-comment-text">Monday 05, September 2021 | By Author</p>
                    <p class="news-comment_text">This Article’s Title goes Here, but not too long.</p>
                    <div class="news-rating">
                        <img class="news-img" src="${eye}">
                        <span class="news-span">68</span>
                        <img class="news-img" src="${heart}">
                        <span class="news-span">86</span>
                    </div>
                </div>
            </div>
            <div class="news-box">
                <img class="news-img" src="${images}">
                <div class="news-comment">
                    <p class="news-comment-text">Monday 05, September 2021 | By Author</p>
                    <p class="news-comment_text">This Article’s Title goes Here, but not too long.</p>
                    <div class="news-rating">
                        <img class="news-img" src="${eye}">
                        <span class="news-span">68</span>
                        <img class="news-img" src="${heart}">
                        <span class="news-span">86</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    section.append(container);
    container.append(newsBlock);

    return section;
}