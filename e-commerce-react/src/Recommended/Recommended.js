import React from 'react'
import './Recommended.css'
import Button from '../Components/Button'

const Recommended = ({handleClick}) => {
  return (
    <>
    <div>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <button className='btn'>All Products</button>
        <Button onClickHandler={handleClick} value="Nike" title ="Nike" />
        <Button onClickHandler={handleClick} value="Adidas" title ="Adidas" />
        <Button onClickHandler={handleClick} value="Puma" title ="Puma" />
        <Button onClickHandler={handleClick} value="Vans" title ="Vans" />

      </div>
    </div>
    </>
  )
}

export default Recommended