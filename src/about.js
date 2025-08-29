export function aboutPage() {
    const content = document.querySelector("#content");

    const div = document.createElement("div");

    const firstPara = document.createElement("p");
    const secondPara = document.createElement("p");
    const thirdPara = document.createElement("p");
    const fourthPara = document.createElement("p");
    const fifthPara = document.createElement("p");
    const sixthPara = document.createElement("p");

    firstPara.textContent = `This restaurant was started in loving memory of my
    grandmother. We try to bring hers and many other grandmother's recipes from
    across India with a hint of western effect to suit their taste pallette. Hope
    you enjoy it.`
    secondPara.textContent = "Founder - Vivek";
    thirdPara.textContent = "Chef - XYZ";
    fourthPara.textContent = "Contact Us";
    fifthPara.textContent = "Mobile no.- 1234567890"
    sixthPara.textContent = "Email = dontyoydaremailatthismailid@pleasedont.com"

    div.appendChild(firstPara);
    div.appendChild(secondPara);
    div.appendChild(thirdPara);
    div.appendChild(fourthPara);
    div.appendChild(fifthPara);
    div.appendChild(sixthPara);

    content.appendChild(div);
}