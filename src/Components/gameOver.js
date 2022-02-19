import React from "react"


function gameOver(props){
    return(props.show ? <div id="gameOver">
    <div>Boa, sacana!</div>
    <button id="restart" onClick={props.handleRestart} >Jogue denovo ai</button>
</div> : <></>
  //<Fragment /> também funciona, mas será preciso importar
  )
}

export default gameOver