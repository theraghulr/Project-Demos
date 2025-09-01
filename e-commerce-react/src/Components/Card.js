import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { FaBagShopping } from "react-icons/fa6";

function Card ({ img, title, star, reviews, prevPrice, newPrice })  {
  return (
    <div>
      <section className="card">
        <img className="card-img" src={img} alt={title}/>
        <div className="crad-details">
          <h3 className="card-title">
            {title}
          </h3>
          <section className="card-reviews">
           {star} {star} {star} {star}
            <span className="total-review">{reviews}</span>        
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <FaBagShopping  className="bag-icon"/>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

export default Card