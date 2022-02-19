const FRONT = "card_front"
const BACK = "card_back"
const CARD = "card"
const ICON = "icon"

startGame();
//============================================


function startGame() {
    initializeCards(game.createCardsFromTechs());
   
}


function initializeCards(cards){

let gameBoard = document.getElementById("gameBoard");
gameBoard.innerHTML = "";
game.cards.forEach(card => {
    let cardElement = document.createElement("div");
    cardElement.id = card.id;
    cardElement.classList.add(CARD); 
    cardElement.dataset.icon = card.icon;

    createCardContent(card, cardElement);
cardElement.addEventListener("click", flipCard)

    gameBoard.appendChild(cardElement);
})


}
//CRIANDO CONTEUDO DAS CARTAS===================================
function createCardContent(card, cardElement){
    createCardFace(FRONT, card, cardElement);
    createCardFace(BACK, card, cardElement);

}

function createCardFace(face, card, element){
let cardElementFace = document.createElement('div');
cardElementFace.classList.add(face);
if(face === FRONT){
    let iconElement = document.createElement('img');
iconElement.classList.add(ICON);
//IMAGENS
iconElement.src = "./assets/" + card.icon + ".png";
cardElementFace.appendChild(iconElement);
}else{cardElementFace.innerHTML = "&lt/&gt"} 

element.appendChild(cardElementFace);

}





//GirarCARTA===============================================

function flipCard(){
if (game.setCard(this.id)){

    //new Audio('/Imagensp/pare.mp3').play();
    this.classList.add("flip");
    if(game.secondCard){
  if(game.checkMatch()){
      game.clearCards();
      if (game.checkGameOver()){
          let gameOverLayer = document.getElementById("gameOver");
          gameOverLayer.style.display = "flex";
        //  new Audio('/Imagensp/parabens.mp3').play();
      }
}else{
      setTimeout(() => {
      let firstCardView = document.getElementById(game.firstCard.id);
      let secondCardView = document.getElementById(game.secondCard.id);
      firstCardView.classList.remove("flip");
      secondCardView.classList.remove("flip");
      game.unflipCards();
      } ,1000);
  };
}
  }
}

function restart(){
    game.clearCards();
    startGame();
let gameOverLayer = document.getElementById("gameOver");
gameOverLayer.style.display = "none";

}
//===============================
function moveCount(){
    document.body.addEventListener(flipCard, TakeMoves)
}

function TakeMoves(x){
   div = document.getElementById("gameOver");
   div.innerHTML = `<div> Seu score é: ${x} </div>`
   
}