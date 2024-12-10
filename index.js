import Navigo from "navigo";

import { getHeader } from './src/components/header/header';
import { getMain } from './src/components/main/main';
import { getFooter } from './src/components/footer/footer';


const app = document.querySelector("#app");

export const router = new Navigo("/");

const header = getHeader();
// const main = getMain();
// const footer = getFooter();

router.resolve();

app.append(header);