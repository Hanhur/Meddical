import { getAboutHome } from "../../components/about/aboutHome/aboutHome";
import { getAboutHospital } from "../../components/about/aboutHospital/aboutHospital";
import { getAboutComment } from "../../components/about/aboutComment/aboutComment";

import "./pageAbout.css";

const aboutHome = getAboutHome();
const aboutHospital = getAboutHospital();
const aboutComment = getAboutComment();


export function getPageAbout()
{
    const about = document.createElement("div");
    about.className = "about";

    about.append(
        aboutHome,
        aboutHospital,
        aboutComment,
    );

    return about;
}