import { router } from "../../../index";
import "./navigationLink.css";

export function getNavigationLink(path, title = "")
{
    let link = document.createElement("a");
    link.className = "link";
    link.href = path;
    link.textContent = title;

    link.addEventListener("click", function(event)
    {
        event.preventDefault();
        router.navigate(path);
    });

    return link;
}