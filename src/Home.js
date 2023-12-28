import React from 'react'
import './Home.css'
import MyDialog from './MyDialog'
import { useStateValue } from './StateProvider'

function Home() {
  const [{products}] = useStateValue()
  return (
    <div className='home'>
      <div className="home__row">
      {
        products.map(product=>(
          <MyDialog
          id={product.id}
          name={product.name}
          capacity={product.capacity}
          battery={product.battery}
          price1={product.price1}
          price2={product.price2}
          description={product.description}
          image={product.image}
          length={product.length}
          width={product.width}
          height={product.height}
          weight={product.weight}
          AcCharging={product.AcCharging}
          solarCharging={product.solarCharging}
          solarPanels={product.solarPanels}
          power={product.power}
          />

        ))
      }
      </div>
      
    </div>
  )
}

export default Home
