import React from 'react'
import CardElement from './cardElement'

export default function gameBoard(props) {
    return (
        <div id="gameBoard">
            
             {props.cards.map((card,index)=>
             <CardElement card={card} handleFlip={props.handleFlip} key={index}></CardElement>)  }

        </div>
    )
}
