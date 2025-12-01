import { getServicesHome } from "../../components/services/servicesHome/servicesHome";
import { getServicesList } from "../../components/services/servicesList/servicesList";

import "./pageServices.css";

const servicesHome = getServicesHome();
const servicesList = getServicesList();

export function getPageServices()
{
    const services = document.createElement("div");
    services.className = "services";

    services.append(
        servicesHome,
        servicesList,
    );

    return services;
}