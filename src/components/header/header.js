import { getHeaderTop } from "../headerTop/headerTop";
import "./header.css";

const headerTop = getHeaderTop();

export function getHeader()
{
    const header = document.createElement("header");
    header.className = "header";

    const container = document.createElement("div");
    container.className = "container";

    header.append(container);
    container.append(headerTop);

    return header;
}