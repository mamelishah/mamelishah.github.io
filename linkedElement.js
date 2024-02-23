
class LinkedInElement {
  constructor(heightOfElement, linkToUser, mainColorHex, secondaryColor, fontFamily) {

    // Definerer egenskaberne for instansen
    this.heightOfElement = heightOfElement;
    this.linkToUser = linkToUser;


    // # fejlen kan være, at det er en div, der ikke er tilgængelig, når scriptet kører.

    this.mainColorHex = mainColorHex;
    this.secondaryColor = secondaryColor;
    this.fontFamily = fontFamily;

  
    // Initialiserer HTML-elementer
    this.linkedInElement = document.createElement("div");
    this.linkedInLogoBackground = document.createElement("div");

    this.linkedInLogo = document.createElement("img");
    this.leftSection = document.createElement("div");
    this.title = document.createElement("p");
    this.iconRightArrow = document.createElement("img");

    this.observeMutations();



    // Kører metoder for at opsætte widget'en
    this.addChildrenToMainSection();
    this.styleLinkedInElement();
    this.positionPara();

    this.styleArrowImage();
    this.styleImageSection();
    this.styleLinkedInLogoBackground();
    this.styleTitle();

    this.sendUSertoLinkedIn();



  }

  addChildrenToMainSection() {
    this.linkedInLogoBackground.appendChild(this.linkedInLogo);

    this.leftSection.appendChild(this.linkedInLogoBackground);
    this.leftSection.appendChild(this.title);
    
    this.linkedInElement.appendChild(this.leftSection);

    this.linkedInElement.appendChild(this.iconRightArrow);

    document.body.appendChild(this.linkedInElement);
  }

  styleLinkedInElement() {
    const element = this.linkedInElement; 
    element.style.backgroundColor = this.mainColorHex;
    element.style.position = "absolute";
    element.style.display = "flex";
    element.style.justifyContent = "space-between";
    element.style.alignItems = "center";
    element.style.borderTopRightRadius = "15px";
    element.style.borderTopLeftRadius = "20px";
    element.style.cursor = "pointer";
  }

  styleImageSection() {
    this.leftSection.style.display = "flex";
    this.leftSection.style.justifyContent = "start";
    this.leftSection.style.alignItems = "center";

  }

  styleArrowImage() {
    this.iconRightArrow.src = "right-arrow.png";
    this.iconRightArrow.style.width = "20px";
    this.iconRightArrow.style.height = "20px";
    this.iconRightArrow.style.marginRight = "20px"
  }

  styleLinkedInLogoBackground() {
    this.linkedInLogoBackground.style.backgroundColor = this.secondaryColor;
    this.linkedInLogoBackground.style.borderTopLeftRadius = "15px"
    this.linkedInLogoBackground.style.display = "flex";
    this.linkedInLogoBackground.style.justifyContent = "center";
    this.linkedInLogoBackground.style.height = "50px";


    this.linkedInLogo.style.margin = "10px";
    this.linkedInLogo.src = "LI-In-Bug copy.jpg";
    this.linkedInLogo.alt = "Beskrivende tekst";
    this.linkedInLogo.style.width = "30px";
    this.linkedInLogo.style.height = "auto";
    this.linkedInLogo.style.objectFit = "contain";

  }

  styleTitle() {
    this.title.textContent = "Eller skriv til os via linkedIn";
    this.title.style.color = "#F8F7F4";
    this.title.style.marginLeft = "20px";
    this.title.style.fontFamily = this.fontFamily
    this.title.style.fontSize = "15px"
    this.title.style.textDecoration = "underline";
  }

  positionPara() {
    window.addEventListener('load', () => {
        const chatboxRect = document.getElementById("WidgetHeaderStyleWrapper__FullHeightDiv-sc-1atfvw-0").getBoundingClientRect();
        console.log(chatboxRect);

        const element = this.linkedInElement; 

        element.style.width = `${chatboxRect.width}px`; 
        element.style.height = `${this.heightOfElement}px`; 
        element.style.left = `${chatboxRect.left}px`; 
        element.style.top = `${chatboxRect.top - this.heightOfElement}px`; 
    });
}


  sendUSertoLinkedIn() {
    this.linkedInElement.addEventListener('click', () => {
      window.open(this.linkToUser, '_blank');
    });
  }

  observeMutations() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          this.handleAttributeMutations(mutation);
        }
      });
    });

    const config = {
      attributes: true,
      attributeFilter: ['class']
    };

    observer.observe(document.documentElement, config);
  }

  handleAttributeMutations(mutation) {
    if (document.documentElement.classList.contains('hs-messages-widget-open')) {
      console.log('hs-messages-widget-open klassen er blevet tilføjet til <html>');
      this.setVisiblitity(true); 
      this.positionPara();
    } else {
      console.log('hs-messages-widget-open klassen er blevet fjernet fra <html>');
      this.setVisiblitity(false);
    }
  }

  setVisiblitity(isHidden) {
    this.linkedInElement.style.display = isHidden ? "flex" : "none";
  }

 
}

let heightOfLinkedInElement = 50;

let mainColorHex = "grey"
let secondaryColor = "#F8F7F4";

let fontFamily = "helvetica";

let linkToLinkedInUser = "https://www.linkedin.com/in/mohammad-al-rabiei-44b312167/";


const el = new LinkedInElement(heightOfLinkedInElement, linkToLinkedInUser, mainColorHex, secondaryColor, fontFamily);




