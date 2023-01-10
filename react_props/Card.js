

function Card(props){
  return <div className= "card">
       <h2 className="cardOp">{props.callText}</h2>
       <p className="cardXd">I love to watch movie . Love to play cricket.</p>
       <h3 className="cardLove">{props.descText}</h3>
    </div>

}

export default Card;