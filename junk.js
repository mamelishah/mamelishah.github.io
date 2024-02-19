


class LinkedInElement {
    linkedInElement = document.createElement("div");
    linkedInLogoBackground = document.createElement("div");
    linkinLogo = document.createElement("img");
    leftSection = document.createElement("div");
    title = document.createElement("p");
    iconRightArrow = document.createElement("img");
 
 
    constructor(heightOfElement, linkToUser, parentElement) {
         this.heightOfElement = heightOfElement;
         this.linkToUser = linkToUser;
         this.parentElement = parentElement;
 
 
         this.addChildrenToMainSection();
         this.styleLinkedInElement();
         this.styleTitle();
         this.positionPara();
     }
 
 
     addChildrenToMainSection() {
       linkedInLogoBackground.appendChild(linkinLogo);
       leftSection.appendChild(linkedInLogoBackground);
       leftSection.appendChild(title);
       linkedInElement.appendChild(leftSection);
       linkedInElement.appendChild(iconRightArrow);
       body.appendChild(linkedInElement);
 
 
     }
 
     styleLinkedInElement() {
       linkedInElement.style.backgroundColor = "#017163";
       linkedInElement.style.position = "absolute";
 
       linkedInElement.style.display = "flex";
       linkedInElement.style.justifyContent = "space-between";
       linkedInElement.style.alignItems = "center";
 
       linkedInElement.style.borderTopRightRadius = "15px"
       linkedInElement.style.borderTopLeftRadius = "20px"
       linkedInElement.style.cursor = "pointer";
     } 
 
 
     styleImageSection() {
       leftSection.style.display = "flex";
       leftSection.style.justifyContent = "start";
       leftSection.style.alignItems = "center";
     }
 
     styleArrowImage() {
       iconRightArrow.src = "right-arrow.png";
       iconRightArrow.style.width = "20px";
       iconRightArrow.style.height = "20px";
       iconRightArrow.style.marginRight = "20px"
     }
 
     styleLinkedInLogoBackground() {
       linkedInLogoBackground.style.backgroundColor = "#F8F7F4";
       linkedInLogoBackground.style.borderTopLeftRadius = "15px"
       linkedInLogoBackground.style.display = "flex";
       linkedInLogoBackground.style.justifyContent = "center";
       linkinLogo.style.margin = "10px";
     }
 
     styleTitle() {
       title.textContent = "Eller skriv til os via linkedIn";
       title.style.color = "#F8F7F4";
       title.style.marginLeft = "20px";
       title.style.fontFamily = "helvetica"
       title.style.fontSize = "15px"
       title.style.textDecoration = "underline";
     }
 
     positionPara() {
       let chatboxRect = parentElement.getBoundingClientRect();
 
 
       linkedInLogoBackground.style.width = chatboxRect.width * 0.15 + 'px'; 
       linkedInLogoBackground.style.height = heightOfLinkedInElement + 'px'; 
   
       linkedInElement.style.width = chatboxRect.width + 'px'; 
       linkedInElement.style.height = heightOfLinkedInElement + "px"; 
       linkedInElement.style.left = chatboxRect.left + "px"; 
       linkedInElement.style.top = chatboxRect.top - heightOfLinkedInElement  +  "px"; 
   }
 
   addEventListeners() {
     window.addEventListener('resize', this.positionPara);
     linkedInElement.addEventListener("click", () => window.location)
 
   }
   }
 
 let heightOfLinkedInElement = 50;
 let linkToLinkedInUser = "https://dk.linkedin.com/in/frederik-holst-2aa234114";
 
 
 
 
 
 const el = new LinkedInElement(50, "https://dk.linkedin.com/in/frederik-holst-2aa234114", document.getElementById("chatbox"));
 
 
   
 