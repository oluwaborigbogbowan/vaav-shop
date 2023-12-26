import React,{useState} from 'react'
import './ProductInfo.css'
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';


function ProductInfo({ name, image, description}) {

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

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

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
              <button aria-describedby={id} type="button" onClick={handleClick} className='btn1'>
              Buy
              </button>
              <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
                <div className='popover__btn' >
                  <Button color='primary' > Card </Button>
                  <Button> USSD </Button>
                  <Button> Transfer </Button>
                  
                </div>
              </Popover>
            
            <button className='btn2'>Rent</button>
            <button className='btn3'>Pay Installmentally</button>
          </div>
        </div>
      </section>
      <div className="productInfo__description">
        <p>Description :</p>
        <p>The PowerCube X, a portable Powerstattion with battery capacity of
            960Wh and output Power of 500W.
            Longer battery life that supports your daily needs. The power station
            can power your homes, shops and even support you for up to 10
            hours during blackouts. Charge quickly with Solar or AC (Nepa)
          </p>
          <div className="power">
            <div>
              <img src="/icons/bulb-svgrepo-com.svg" alt="bulb" className='icon'/>
              <p >
                  <small>Bulb<br/>
                  &#40;10W&#41;</small><br/>
                  <strong>96 hours</strong>
              </p>
            </div>
            <div>
              <img src="/icons/fan-cooler-svgrepo-com.svg" alt="fan" className='icon'/>
              <p >
                  <small>Fan<br/>
                  &#40;45W&#41;</small><br/>
                  <strong>20 hours</strong>
              </p>
            </div>
            <div>
              <img src="/icons/tv-monitor-svgrepo-com.svg" alt="tv" className='icon'/>
              <p >
                  <small>TV<br/>
                  &#40;150W&#41;</small><br/>
                  <strong>6 hours</strong>
              </p>
            </div>
            <div>
              <img src="/icons/laptop-svgrepo-com.svg" alt="laptop" className='icon'/>
              <p >
                  <small>Laptop<br/>
                  &#40;65W&#41;</small><br/>
                  <strong>15 hours</strong>
              </p>
            </div>
            <div>
              <img src="/icons/phone-svgrepo-com.svg" alt="phone" className='icon'/>
              <p >
                  <small>Phone<br/>
                  &#40;30W&#41;</small><br/>
                  <strong>33 hours</strong>
              </p>
            </div>
          </div>
      </div>
      <div className="productInfo__feature">
        <p>Features :</p>
        <div className="feature__list">
          <p>Fast dual charging&#40;AC/Solar&#41;</p>
          <p>Easy to use&#40;plug and play&#41;</p>
          <p>Portable</p>
          <p>Automatic switching</p>
        </div>
      </div>
      <div className="productInfo__specification">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Specification</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Specs in picture</Typography>
            </AccordionSummary>
            <AccordionDetails>
              
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Product Specification</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="specification__info">
                <div>
                  <h3>Battery</h3>
                  <div>
                  <p>Capacity:<br/>
                    <span>2042.8Wh </span></p>
                  <p>Cell Chemistry:<br/>
                  <span>FP (LiFePO4 battery) </span></p>
                  <p>Cycle life:<br/>
                  <span>4000 cycles to 70%+ capacity </span></p>
                  </div>
                </div>
                <div>
                  <h3>Ports</h3>
                  <div>
                  <p>AC Output:<br/>
                  <span>230V~ 50Hz, 25A Max, AC </span></p>
                  <p>AC Input:<br/>
                  <span>120V, 60Hz, 15A Max </span></p>
                  <p>DC Input:<br/>
                  <span> 11V-17.5V, 8A Max, Double to 8A Max 17.5V-60V</span></p>
                  </div>
                </div>
                <div>
                  <h3>Dimensions</h3>
                  <div>
                  <p>Length:<br/>
                  <span>14.7in(37.36cm) </span></p>
                  <p>Width:<br/>
                  <span>18.6in(47.3cm) </span></p>
                  <p>Height:<br/>
                  <span>14.1in(35.94cm) </span></p>
                  <p>Weight:<br/>
                  <span>61.5 lbs(27.9 kg) </span></p>
                  </div>
                </div>
                <div>
                  <h3>Charging Time(0-100%)</h3>
                  <div>
                  <p>AC Adapter:<br/>
                  <span>2 Hours </span></p>
                  <p>Solar Panel:<br/>
                  <span> 3 Hours</span></p>
                  </div>
                </div>
                <div>
                  <h3>General</h3>
                  <div>
                  <p>Warranty:<br/>
                  <span> 2 Years</span></p>
                  </div>
                </div>
                <div>
                  <h3>Solar Panel Combination</h3>
                  <div>
                  <p>180 W Panel:<br/>
                  <span>3 panels </span></p>
                  </div>
                </div>
              </div>
              
            </AccordionDetails>
          </Accordion>
          
        </AccordionDetails>
      </Accordion>
      </div>
      {/* <section className="devices">
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
      </section> */}

      
    </div>
  )
}

export default ProductInfo
