import { getNavigationLink } from '../navigation/navigationLink';
import "./headerMenu.css";

export function getHeaderMenu()
{
    const headerMenu = document.createElement("div");
    headerMenu.className = "header-menu";

    const nav = document.createElement("nav");
    nav.className = "navigation";

    const list = document.createElement("ul");
    list.className = "list";

    const item = document.createElement("li");
    item.className = "item";

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
            item.append(links[oneLink]);
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

    headerMenu.append(nav);
    nav.append(list);
    list.append(item);

    return {
        headerMenu,
        setActiveLink
    }
}