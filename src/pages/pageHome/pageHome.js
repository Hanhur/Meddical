import { getHomeMenu } from "../../components/homeMenu/homeMenu";
import { getWelcomeHome } from "../../components/welcomeHome/welcomeHome";
import { getBook } from "../../components/blook/book";
import "./pageHome.css";

const homeMenu = getHomeMenu();
const welcomeHome = getWelcomeHome();
const book = getBook();

export function getPageHome()
{
    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";

    wrapper.append(
        homeMenu,
        welcomeHome,
        book,
    );

    return wrapper;
}