const header = document.createElement("header");
const headerHeading = document.createElement("h1");
const headerHeadingText = document.createTextNode("Tämä on artikkelin otsikko");
const headerParagraph = document.createElement("p");
const headerParagraphText = document.createTextNode( "Ensimmäinen kappale! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corrupti et facere incidunt, quis amet cupiditate quaerat rem! Vitae saepe ducimus atque nihil natus cum, cupiditate sit. Recusandae, consequatur a!",);


header.classList.add("ylatunniste");
header.classList.add("bordered");
headerHeading.appendChild(headerHeadingText);
headerParagraph.appendChild(headerParagraphText);
header.appendChild(headerHeading);
header.appendChild(headerParagraph);
document.body.appendChild(header);


const section = document.createElement("section");
const sectionContent = document.createElement("div");
const sectionParagraph = document.createElement("p");
const sectionParagraphText = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corrupti et facere incidunt, quis amet cupiditate quaerat rem! Vitae saepe ducimus atque nihil natus cum, cupiditate sit. Recusandae, consequatur",);

const sectionFigure = document.createElement("figure");
const sectionImage = document.createElement("img");


section.id = "rinnakkain";
section.classList.add("bordered");
sectionFigure.id = "kuva";
sectionImage.src ="https://dri.es/files/images/blog/javascript-powered-multichannel.gif";

sectionParagraph.appendChild(sectionParagraphText);
sectionContent.appendChild(sectionParagraph);
sectionFigure.appendChild(sectionImage);
sectionContent.appendChild(sectionFigure);
section.appendChild(sectionContent);
document.body.appendChild(section);


const footer = document.createElement("footer");
footer.classList.add("bordered");
const footerParagraph = document.createElement("p");
const footerParagraphText = document.createTextNode("@ 2022 Ahmed Al-hassan");


footerParagraph.appendChild(footerParagraphText);
footer.appendChild(footerParagraph);
document.body.appendChild(footer);