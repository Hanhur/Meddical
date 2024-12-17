import { getHeaderTop } from "../headerTop/headerTop";
import { getNavigationLink } from "../navigation/navigationLink";
import search from "../../images/search.svg";
import "./header.css";

const headerTop = getHeaderTop();

export function getHeader()
{
    const header = document.createElement("header");
    header.className = "header";

    const container = document.createElement("div");
    container.className = "container";
    
    const inner = document.createElement("div");
    inner.className = "inner";
    
    const nav = document.createElement("nav");
    nav.className = "navigation";

    const links = {
        "home": getNavigationLink("/", "Home"),
        "about": getNavigationLink("/about", "About us"),
        "services": getNavigationLink("/services", "Services"),
        "doctors": getNavigationLink("/doctors", "Doctors"),
        "news": getNavigationLink("/news", "News"),
        "contact": getNavigationLink("/contact", "Contact")
    }

    for (const oneLink in links) 
    {
        nav.append(links[oneLink]);
    }
    
    const setActiveLink = function (link = "") 
    {
        for (const oneLink in links) 
        {
            links[oneLink].classList.remove("active");
        }
        if (link !== "") 
        {
            links[link].classList.add("active");
        }
    }

    const searchBtn = document.createElement("div");
    searchBtn.className = "search-btn";
    searchBtn.innerHTML = `
        <img class="search-img" src="${search}">
        <button class="btn">Appointment</button>
    `;

    header.append(container, inner);
    container.append(headerTop);
    inner.append(nav);
    nav.append(searchBtn);

    return {
        header,
        setActiveLink
    }
}