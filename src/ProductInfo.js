import React,{useState} from 'react'
import './ProductInfo.css'


function ProductInfo({ id, name, image, description}) {

  const [activeImage, setActiveImage] = useState(0)
  const[price,setPrice] = useState('500,000')
  const[battery,setBattery] = useState('500')
  const handle500 = ()=>{
    setBattery('500')
    setPrice('500,000')
  }
  const handle1000 = ()=>{
    setBattery('1000')
    setPrice('700,000')
  }

  const img = [
    "https://www-konga-com-res.cloudinary.com/w_700,f_auto,fl_lossy,dpr_1.0,q_auto/media/catalog/product/A/Z/121504_1667161421.jpg",
    'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/6899052/1.jpg?8665',
    'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/6899052/2.jpg?8088',
  ]
  
  const handleImageChange = (newIndex) => {
    setActiveImage(newIndex);
  };


  return (
    <div className='productInfo'>
      <section className='productInfo__upper'>
        <div className="productInfo__img">
          <img src={img[activeImage]} alt="" className='productinfo__img__main'/>
          <div className="productInfo__img__button">
            {img.map((img,index)=>(
              <button key={index} onClick={()=>handleImageChange(index)}>
                <img src={img} alt="" />
              </button>
            ))}
          </div>
        </div>
        <div className="productInfo__namePrice">
          
          <p className="productInfo__price">
            <small>&#x20A6;</small>
            <strong>{price}</strong>
          </p>
          <div className="productInfo__battery">
            <button id='batt1' onClick={handle500}>500Wh</button>
            <button id='batt2' onClick={handle1000}>1000Wh</button>
          </div>
          <div className="productInfo__button">
            <button className='btn1'>Buy</button>
            <button className='btn2'>Rent</button>
            <button className='btn3'>Pay Installmentally</button>
          </div>
        </div>
      </section>
      <div className="productInfo__description">
        <p>Description :</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis commodi, cumque ex nulla cum nisi quia ad ut in praesentium quos qui quod sapiente, nesciunt blanditiis suscipit enim amet totam.</p>
      </div>
      <div className="productInfo__feature">
        <p>Features :</p>
        <ul>
          <li>Easy to Carry</li>
          <li>Smart Control</li>
          <li> Fast Dual Charging</li>
          <li> Safe & Reliable</li>
          <li>  Cost-effective</li>
        </ul>
      </div>
      <div className="productInfo__specification">
        <p>Specification :</p>
        <ul className='specification__list'>
          <li>
           <strong>Battery Capacity:</strong> {battery}Wh
          </li>
          <li>
            <strong>Solar PV Requirement:</strong> 180W Solar Panel
          </li>
          <li>
            <strong>AC Input:</strong> 230V/50Hz  
          </li>
          <li>
            <strong>AC Output Power:</strong> 500VA  
          </li>
        </ul>
      </div>
      <section className="devices">
        <div className="device__title">
              <h2>This device can power:</h2>
        </div>
        <div className="device__list">
              <div>
                <p>
                  <strong>Laptop&#40;&#60;70W&#41;</strong><br/>
                  <small>for: 6+ hours</small>
                </p>
              </div>
              <div>
                <p>
                  <strong>TV LED&#40;&#60;70W&#41;</strong><br/>
                  <small>for: 6+ hours</small>
                </p>
              </div>
              <div>
                <p>
                  <strong>Bulb&#40;&#60;15W&#41;</strong><br/>
                  <small>for: 30+ hours</small>
                </p>
              </div>
              <div>
                <p>
                  <strong>fan&#40;&#60;10W&#41;</strong><br/>
                  <small>for: 50+ hours</small>
                </p>
              </div>
              
        </div>
      </section>

      
    </div>
  )
}

export default ProductInfo
