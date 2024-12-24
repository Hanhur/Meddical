import Navigo from "navigo";

import { getHeader } from './src/components/header/header';
import { getMain } from './src/components/main/main';
import { getFooter } from './src/components/footer/footer';


const app = document.querySelector("#app");

export const router = new Navigo("/");

const header = getHeader();
const main = getMain();
const footer = getFooter();

router.on("/", async () => {
    main.innerHTML = "";
    const moduleHome = await import("./src/pages/pageHome/pageHome");
    const pageHome = moduleHome.getPageHome();
    main.append(pageHome);
    header.setActiveLink("home");
});

router.resolve();

app.append(header.header, main, footer);