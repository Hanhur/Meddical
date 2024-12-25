import { getHomeMenu } from "../../components/homeMenu/homeMenu";
import { getWelcomeHome } from "../../components/welcomeHome/welcomeHome";
import { getServices } from "../../components/services/services";
import "./pageHome.css";

const homeMenu = getHomeMenu();
const welcomeHome = getWelcomeHome();
const services = getServices();

export function getPageHome()
{
    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";

    wrapper.append(
        homeMenu,
        welcomeHome,
        services,
    );

    return wrapper;
}