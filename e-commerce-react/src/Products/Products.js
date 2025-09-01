import React from 'react'
import './Products.css';
import { AiFillStar } from "react-icons/ai";
import { FaBagShopping } from "react-icons/fa6";
import Card from '../Components/Card';

function Products  ({result}) {
  return (
    <section className="card-container">{result}</section>
  )
}

export default Products