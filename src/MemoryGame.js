
import React, {useState,useEffect} from "react"
import GameOver from "./Components/gameOver"
import GameBoard from "./Components/gameBoard.js"
import game from "./memoriagame"

function MemoryGame() {

const [gameOver,setGameOver] = useState(false)
const [cards,setCards] = useState([])


useEffect(()=>{
  setCards(game.createCardsFromTechs())},[])

function restart(){
setGameOver(false)
game.clearCards()
setCards(game.createCardsFromTechs())
}

function handleFlip(card)
{if (game.setCard(card.id)){

  //new Audio('/Imagensp/pare.mp3').play();
  if(game.secondCard){
if(game.checkMatch()){
    game.clearCards();
    if (game.checkGameOver()){
      //GAMEOVER
      setGameOver(true)
    }
}else{
    setTimeout(() => {//nomatch
    game.unflipCards();
    setCards([...game.cards])

    } ,1000);
};
}
}
setCards([...game.cards])
}

  return (
    <div>
      <GameBoard handleFlip={handleFlip} cards={cards}></GameBoard>
      

      <GameOver show={gameOver} handleRestart={restart}></GameOver>
    </div>
    
  ) 
}

export default MemoryGame;
