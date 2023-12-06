import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'

function Product({ id, name, image, description}) {
  return (
    <div className='product'>
      <Link to='/productInfo'>
        <img className='product__img' src={image} alt="" />
          <div className="product__info">
              <h2 className='product__name'>{name}</h2>
              <p className="product__description">Description:</p>
              <p className='product__description__info'>{description.length <= 30 ? description :`${description.slice(0,30)}...` }</p>
          </div>
          <div className="product__buttons">
              <button>Buy now</button>
              <button>Rent</button>
              <button>Pay Installmentaly</button>
          </div>
      </Link>
       
    </div>
  )
}

export default Product
