import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
import Product from './Product';
import ProductInfo from './ProductInfo';
import './MyDialog.css'
import { useStateValue } from './StateProvider'



function MyDialog({ id,name,image,description,price1,price2,capacity,battery,length,width,height,weight,AcCharging,solarCharging,solarPanels,power}) {
  const [{products}] = useStateValue()

    const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className='dialog'>
        
        <Button variant="text" onClick={handleClickOpen} className='dialog__button' sx={{textTransform: 'none',margin:'0',lineHeight:'1.3'}}>
            <Product 
             id={id}
             name={name}
             image={image[0]}
             description={description}
            />
        </Button>
        <Dialog open={open} onClose={handleClose} maxWidth='xl' sx={{zIndex:1, }}>
        <DialogTitle sx={{ borderBottom: '1px solid #0c6525', padding: '5px', marginBottom:'10px'}}>The Powercube</DialogTitle>
            <DialogContent sx={{maxWidth: '560px'}} >
            <ProductInfo 
            id={id}
            name={name}
            capacity={capacity}
            battery={battery}
            price1={price1}
            price2={price2}
            description={description}
            image={image}
            length={length}
            width={width}
            height={height}
            weight={weight}
            AcCharging={AcCharging}
            solarCharging={solarCharging}
            solarPanels={solarPanels}
            power={power}
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Close
            </Button>
            </DialogActions>
        </Dialog>
    </div>
  )
}

export default MyDialog
