import React from 'react'

export default function cardElement(props) {
    return (
        <div onClick={()=>{props.handleFlip(props.card)}} className={props.card.flipped ? "card flip" : "card"} id={props.card.id}>

            <div className="card_front">
                <img className="icon" src={`images/assets/${props.card.icon}.png`} alt={props.card.icon}></img>
            </div>
            <div className="card_back">
                {"</>"}
            </div>
        </div>
    )
}
