
let heightOfLinkedInElement = 50;
let linkToLinkedInUser = "https://dk.linkedin.com/in/frederik-holst-2aa234114";


let getChatBoxElement = document.getElementsByClassName(id_identificator);
let body = document.body;

const linkedInElement = document.createElement("div");
const linkedInLogoBackground = document.createElement("div");
const linkinLogo = document.createElement("img");
const leftSection = document.createElement("div");

linkedInElement.style.visibility = "none";

document.addEventListener('DOMContentLoaded', function() {
    const htmlElement = document.documentElement; 

function handleAttributeMutations(mutations) {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        const targetElement = mutation.target;
        if (targetElement.classList.contains('hs-messages-widget-open')) {
          console.log('hs-messages-widget-open klassen er blevet tilføjet til <html>');
          linkedInElement.style.visibility = "block";
        } else {
          console.log('hs-messages-widget-open klassen er blevet fjernet fra <html>');
          linkedInElement.style.visibility = "none";
        }
      }
    });
  }


const observer = new MutationObserver(handleAttributeMutations);

const config = {
  attributes: true, // observer ændringer i attributter
  attributeFilter: ['class'] // fokuser kun på ændringer i 'class'-attributten
};

observer.observe(htmlElement, config);

  });
  

const title = document.createElement("p");
title.textContent = "Eller skriv til os via linkedIn";
title.style.color = "#F8F7F4";
title.style.marginLeft = "20px";
title.style.fontFamily = "helvetica"
title.style.fontSize = "15px"
title.style.textDecoration = "underline";


linkinLogo.src = "LI-In-Bug copy.jpg"
linkinLogo.alt = "Beskrivende tekst";


const iconRightArrow = document.createElement("img");
iconRightArrow.src = "right-arrow.png";
iconRightArrow.style.width = "20px";
iconRightArrow.style.height = "20px";
iconRightArrow.style.marginRight = "20px"




leftSection.style.display = "flex";
leftSection.style.justifyContent = "start";
leftSection.style.alignItems = "center";

linkedInLogoBackground.appendChild(linkinLogo);
leftSection.appendChild(linkedInLogoBackground);
leftSection.appendChild(title);


linkedInElement.appendChild(leftSection);
linkedInElement.appendChild(iconRightArrow);



body.appendChild(linkedInElement);


linkedInLogoBackground.style.backgroundColor = "#F8F7F4";
linkedInLogoBackground.style.borderTopLeftRadius = "15px"
linkedInLogoBackground.style.display = "flex";
linkedInLogoBackground.style.justifyContent = "center";
linkinLogo.style.margin = "10px";




linkedInElement.style.backgroundColor = "#017163";
linkedInElement.style.position = "absolute";

linkedInElement.style.display = "flex";
linkedInElement.style.justifyContent = "space-between";
linkedInElement.style.alignItems = "center";

linkedInElement.style.borderTopRightRadius = "15px"
linkedInElement.style.borderTopLeftRadius = "20px"
linkedInElement.style.cursor = "pointer";

function positionPara() {
    let chatboxRect = getChatBoxElement.getBoundingClientRect();


    linkedInLogoBackground.style.width = chatboxRect.width * 0.15 + 'px'; 
    linkedInLogoBackground.style.height = heightOfLinkedInElement + 'px'; 

    linkedInElement.style.width = chatboxRect.width + 'px'; 
    linkedInElement.style.height = heightOfLinkedInElement + "px"; 
    linkedInElement.style.left = chatboxRect.left + "px"; 
    linkedInElement.style.top = chatboxRect.top - heightOfLinkedInElement  +  "px"; 
}

positionPara();


window.addEventListener('resize', positionPara);
linkedInElement.addEventListener("click", () => window.location.href = linkToLinkedInUser);




  


