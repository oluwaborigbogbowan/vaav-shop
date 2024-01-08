import React,{useState} from 'react'
import './ProductInfo.css'
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';



function ProductInfo({ name,image,description,price1,price2,capacity,battery,length,width,height,weight,AcCharging,solarCharging,solarPanels,power}) {

  const [activeImage, setActiveImage] = useState(0)
  const[price,setPrice] = useState(price1)
  
  const handleAlone = ()=>{
    
    setPrice(price1)
  }
  const handleSolar = ()=>{
    
    setPrice(price2)
  }

  
  
  const handleImageChange = (newIndex) => {
    setActiveImage(newIndex);
  };

  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [anchorEl3, setAnchorEl3] = useState(null);

  const handleClick = (event, anchorElSetter) => {
    anchorElSetter(event.currentTarget);
  };

  const handleClose = (anchorElSetter) => {
    anchorElSetter(null);
  };

  const open1 = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);

  return (
    <div className='productInfo'>
      <section className='productInfo__upper'>
        <div className="productInfo__img">
          <img src={image[activeImage]} alt="" className='productinfo__img__main'/>
          <div className="productInfo__img__button">
            {image.map((img,index)=>(
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
          <Button variant="contained" id='batt1' onClick={handleAlone} sx={{background: '#0c6525',padding:'5px', marginRight: '5px','&:hover': {backgroundColor: 'gray'}}}>Alone</Button>
          <Button variant="contained" id='batt2' onClick={handleSolar} sx={{background: '#0c6525',padding:'5px','&:hover': {backgroundColor: 'gray'}}}>With solar</Button>
            {/* <button id='batt1' onClick={handleAlone}>Alone</button> */}
            {/* <button id='batt2' onClick={handleSolar}>With solar </button> */}
          </div>
          <div className="productInfo__button">
          <Button variant="contained"   onClick={(e) => handleClick(e, setAnchorEl1)} className='btn1' sx={{background: '#0c6525',padding:'5px', marginRight: '5px','&:hover': {backgroundColor: 'gray'}}}>Buy</Button>
              {/* <button  type="button" onClick={handleClick} >
              Buy
              </button> */}
              <Popover
                open={open1}
                anchorEl={anchorEl1}
                onClose={() => handleClose(setAnchorEl1)}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
      >
                <div className='popover__btn' >
                  <Button color='primary' > Card </Button>
                  <Button> USSD </Button>
                  <Button> Transfer </Button>
                  
                </div>
              </Popover>
            
              <Button variant="contained" className='btn3' onClick={(e) => handleClick(e, setAnchorEl2)}  sx={{background: '#0c6525',padding:'5px', marginRight: '5px','&:hover': {backgroundColor: 'gray'}}}>Installment</Button>
              <Popover
                open={open2}
                anchorEl={anchorEl2}
                onClose={() => handleClose(setAnchorEl2)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <Alert severity="info">
                <AlertTitle>Installment</AlertTitle>
                Price:
                <small>&#x20A6;</small>
                 <strong>{price}</strong><br/>
                 Installment coming soon...
                </Alert>
              </Popover>
              <Button variant="contained" className='btn2' onClick={(e) => handleClick(e, setAnchorEl3)} sx={{background: '#0c6525',padding:'5px','&:hover': {backgroundColor: 'gray'}}}>Rent</Button>
              <Popover
                open={open3}
                anchorEl={anchorEl3}
                onClose={() => handleClose(setAnchorEl3)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <Alert severity="info">
                <AlertTitle>Rent</AlertTitle>
                Price:
                <small>&#x20A6;</small>
                 <strong>{price}</strong><br/>
                 Rental coming soon...
                </Alert>
              </Popover>
            {/* <button className='btn2'>Rent</button> */}
            {/* <button className='btn3'>Pay Installmentally</button> */}
          </div>
        </div>
      </section>
      <div className="productInfo__description">
        <p>Description :</p>
        <p>{description}</p>
          <div className="power">
            {
              power.map(power=>(

            <div>
              <img src={power.img} alt={power.img} className='icon'/>
              <p >
                  <small>{power.device}<br/>
                  &#40;{power.rating}&#41;</small><br/>
                  <strong>{power.hours}</strong>
              </p>
            </div>
              ))
            }
            
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
                    <span>{battery}</span></p>
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
                  <span>{length} </span></p>
                  <p>Width:<br/>
                  <span>{width}</span></p>
                  <p>Height:<br/>
                  <span>{height} </span></p>
                  <p>Weight:<br/>
                  <span>{weight}</span></p>
                  </div>
                </div>
                <div>
                  <h3>Charging Time(0-100%)</h3>
                  <div>
                  <p>AC Adapter:<br/>
                  <span>{AcCharging}</span></p>
                  <p>Solar Panel:<br/>
                  <span> {solarCharging}</span></p>
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
                  <span>{solarPanels}panels </span></p>
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
