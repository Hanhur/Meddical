import "./main.css";

export function getMain()
{
    const main = document.createElement("main");
    main.classList.add("main", "container");

    return main;
}