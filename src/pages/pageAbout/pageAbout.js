import { getAboutHome } from "../../components/about/aboutHome/aboutHome";
import { getAboutHospital } from "../../components/about/aboutHospital/aboutHospital";


import "./pageAbout.css";

const aboutHome = getAboutHome();
const aboutHospital = getAboutHospital();


export function getPageAbout()
{
    const about = document.createElement("div");
    about.className = "about";

    about.append(
        aboutHome,
        aboutHospital,
    );

    return about;
}