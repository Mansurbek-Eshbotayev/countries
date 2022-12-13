import "./card.css"


const Card = ({img,name,popul,region,capital}) => {
  return(
    <li className="card">
   <img className="card__img" src={img} alt="flag" />
   <div className="card__info">
    <h3>{name}</h3>
    <p className="card__text">Population: <span>{popul}</span></p>
    <p className="card__text">Region: <span>{region}</span></p>
    <p>Capital: <span>{capital}</span></p>
   </div>
  </li>
  )
}

export default Card;