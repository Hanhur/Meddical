import { getHomeMenu } from "../../components/homeMenu/homeMenu";
import { getWelcomeHome } from "../../components/welcomeHome/welcomeHome";
import { getServices } from "../../components/services/services";
import { getSpecialties } from "../../components/specialties/specialties";
import "./pageHome.css";

const homeMenu = getHomeMenu();
const welcomeHome = getWelcomeHome();
const services = getServices();
const specialties = getSpecialties();

export function getPageHome()
{
    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";

    wrapper.append(
        homeMenu,
        welcomeHome,
        services,
        specialties,
    );

    return wrapper;
}