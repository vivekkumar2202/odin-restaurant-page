import "./styles.css"
import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { aboutPage } from "./about.js";

const navInteraction = (() => {
    const buttons = document.querySelectorAll("nav button");
    buttons.forEach(button => {
        button.addEventListener("click", e => {
            const content = document.querySelector("#content");
            content.innerHTML = "";
            if (e.target.textContent === "Home") {
                homePage();
            }
            else if (e.target.textContent === "Menu") {
                menuPage();
            }
            else if (e.target.textContent === "About") {
                aboutPage();
            }
        })
    });
})();