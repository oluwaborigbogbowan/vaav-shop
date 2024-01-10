import React from 'react'
import './Product.css'




function Product({ id, name, image, description}) {

  
  return (
    <div className='product'>
      
        <img className='product__img' src={image} alt="" />
          <div className="product__info">
              <h2 className='product__name'>{name}</h2>
              <p className="product__description">Description:</p>
              <p className='product__description__info'>{description.length <= 90 ? description :`${description.slice(0,90)}...` }</p>
          </div>
          {/* <div className="product__buttons">
            <Button variant="contained"  sx={{background: '#0c6525', marginRight: '5px','&:hover': {backgroundColor: 'gray'}}}>Buy</Button>
            <Button variant="contained"sx={{background: '#0c6525',marginRight: '5px','&:hover': {backgroundColor: 'gray'}}}> Installment</Button>
            <Button variant="contained"sx={{background: '#0c6525','&:hover': {backgroundColor: 'gray'}}}>Rent</Button>
              
          </div> */}
      
       
    </div>
  )
}

export default Product
