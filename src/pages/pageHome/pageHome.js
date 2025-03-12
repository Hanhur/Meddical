import { getHomeMenu } from "../../components/home/homeMenu/homeMenu";
import { getWelcomeHome } from "../../components/home/welcomeHome/welcomeHome";
import { getServices } from "../../components/home/services/services";
import { getSpecialties } from "../../components/home/specialties/specialties";
import { getBookAppointment } from "../../components/home/bookAppointment/bookAppointment";
import { getDoctors } from "../../components/home/doctors/doctors";
import { getNewsInformation } from "../../components/home/newsInformation/newsInformation";
import { getContact } from "../../components/home/contact/contact";

import "./pageHome.css";

const homeMenu = getHomeMenu();
const welcomeHome = getWelcomeHome();
const services = getServices();
const specialties = getSpecialties();
const book = getBookAppointment();
const doctors = getDoctors();
const news = getNewsInformation();
const contact = getContact();

export function getPageHome()
{
    const home = document.createElement("div");
    home.className = "home";

    home.append(
        homeMenu,
        welcomeHome,
        services,
        specialties,
        book,
        doctors,
        news,
        contact
    );

    return home;
}