import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { FaBagShopping } from "react-icons/fa6";

function Card  ()  {
  return (
    <div>
      <section className="card">
        <img className="card-img" src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="Shoe"/>
        <div className="crad-details">
          <h3 className="card-title">
            Shoe
          </h3>
          <section className="card-reviews">
            <AiFillStar className="rating-star" /> <AiFillStar className="rating-star" />  <AiFillStar className="rating-star" /> <AiFillStar className="rating-star" /> <AiFillStar className="rating-star" /> <AiFillStar className="rating-star" />  
            <span className="total-review">5</span>        
          </section>
          <section className="card-price">
            <div className="price">
              <del>$250</del> $200
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