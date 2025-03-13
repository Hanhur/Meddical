import { getAboutHome } from "../../components/about/aboutHome/aboutHome";
import { getAboutHospital } from "../../components/about/aboutHospital/aboutHospital";
import { getAboutComment } from "../../components/about/aboutComment/aboutComment";
import { getAboutDoctors } from "../../components/about/aboutDoctors/aboutDoctors";
import { getAboutNews } from "../../components/about/aboutNews/aboutNews";
import { getAboutContact } from "../../components/about/aboutContact/aboutContact";

import "./pageAbout.css";

const aboutHome = getAboutHome();
const aboutHospital = getAboutHospital();
const aboutComment = getAboutComment();
const aboutDoctors = getAboutDoctors();
const aboutNews = getAboutNews();
const aboutContact = getAboutContact();


export function getPageAbout()
{
    const about = document.createElement("div");
    about.className = "about";

    about.append(
        aboutHome,
        aboutHospital,
        aboutComment,
        aboutDoctors,
        aboutNews,
        aboutContact
    );

    return about;
}