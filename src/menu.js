import butterChicken from "./pexels-prabal-9609844.jpg";
import naan from "./pexels-paggiarofrancesco-1117862.jpg";
import masalaDosa from "./pexels-jack-baghel-2199968-20422138.jpg";
import gulabJamun from "./pexels-plantsandgraphics-7449105.jpg";


export function menuPage () {
    const content = document.querySelector("#content");

    const parentDiv = document.createElement("div");
    parentDiv.setAttribute("class", "menu");

    const firstDiv = document.createElement("div");
    const firstImage = document.createElement("img");
    const firstPara = document.createElement("p");
    const secondPara = document.createElement("p");

    firstImage.src = butterChicken;
    firstPara.textContent = "Chicken Butter Masala";
    secondPara.textContent = "Price: $5";

    firstDiv.appendChild(firstImage);
    firstDiv.appendChild(firstPara);
    firstDiv.appendChild(secondPara);

    const secondDiv = document.createElement("div");
    const secondImage = document.createElement("img");
    const thirdPara = document.createElement("p");
    const fourthPara = document.createElement("p");

    secondImage.src = naan;
    thirdPara.textContent = "Naan";
    fourthPara.textContent = "Price: $1";

    secondDiv.appendChild(secondImage);
    secondDiv.appendChild(thirdPara);
    secondDiv.appendChild(fourthPara);

    const thirdDiv = document.createElement("div");
    const thirdImage = document.createElement("img");
    const fifthPara = document.createElement("p");
    const sixthPara = document.createElement("p");

    thirdImage.src = masalaDosa;
    fifthPara.textContent = "Masala Dosa";
    sixthPara.textContent = "Price: $3";

    thirdDiv.appendChild(thirdImage);
    thirdDiv.appendChild(fifthPara);
    thirdDiv.appendChild(sixthPara);

    const fourthDiv = document.createElement("div");
    const fourthImage = document.createElement("img");
    const seventhPara = document.createElement("p");
    const eighthPara = document.createElement("p");

    fourthImage.src = gulabJamun;
    seventhPara.textContent = "Gulab Jamun";
    eighthPara.textContent = "Price: $0.5";

    fourthDiv.appendChild(fourthImage);
    fourthDiv.appendChild(seventhPara);
    fourthDiv.appendChild(eighthPara);

    parentDiv.appendChild(firstDiv);
    parentDiv.appendChild(secondDiv);
    parentDiv.appendChild(thirdDiv);
    parentDiv.appendChild(fourthDiv);

    content.appendChild(parentDiv);
}