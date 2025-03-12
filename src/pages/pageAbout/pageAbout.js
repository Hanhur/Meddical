import { getAboutHome } from "../../components/about/aboutHome/aboutHome";



import "./pageAbout.css";

const aboutHome = getAboutHome();


export function getPageAbout()
{
    const about = document.createElement("div");
    about.className = "about";

    about.append(
        aboutHome,
    );

    return about;
}