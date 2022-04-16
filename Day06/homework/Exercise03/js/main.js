const element = document.getElementsByTagName("img");

for (let i = 0 ; i < element.length ; i++) {
        element[i].addEventListener("error", IMG);
}

function IMG(){
    this.src = "./img/card.png"
}