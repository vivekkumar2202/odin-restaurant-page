import homePageImage from "./pexels-chanwalrus-958545.jpg";

export function homePage () {
    const content = document.querySelector("#content");

    const parentDiv = document.createElement("div");
    parentDiv.setAttribute("class", "home");

    const heading = document.createElement("h1");
    heading.textContent = "Vivek's Restaurant";
    parentDiv.appendChild(heading);

    const div = document.createElement("div");
    const firstPara =document.createElement("p");
    firstPara.textContent = `Welcome to our restaurant where we serve authentic 
    Indian food. From Butter Chicken to Gulab Jamun you will get everything here.
    We serve foods from all across India, be it the North Indian food or South 
    India we have everything.`
    div.appendChild(firstPara);

    const secondPara = document.createElement("p");
    secondPara.textContent = `You will get to experience Indian hospitality at its 
    finest. Our staff are always there for you and our chefs are well trained for
    all your demands that you might have.`
    div.appendChild(secondPara);
    parentDiv.appendChild(div);

    const image = document.createElement("img");
    image.src = homePageImage;
    parentDiv.appendChild(image);

    content.appendChild(parentDiv);
}