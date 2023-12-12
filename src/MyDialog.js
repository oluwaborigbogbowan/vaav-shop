import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
import Product from './Product';
import ProductInfo from './ProductInfo';
import './MyDialog.css'



function MyDialog() {

    const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className='dialog'>
        
        <Button variant="text" onClick={handleClickOpen} className='dialog__button' sx={{ Width: "20%" ,textTransform: 'none',margin:'0',lineHeight:'1.3'}}>
            <Product 
             id='1'
             name='The Powercube'
             image="https://www-konga-com-res.cloudinary.com/w_700,f_auto,fl_lossy,dpr_1.0,q_auto/media/catalog/product/A/Z/121504_1667161421.jpg"
             description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ea perferendis nesciunt quos at neque dolore totam iste ipsa, dolorem iusto velit fugit animi expedita sunt deserunt voluptatibus quisquam sapiente!'
            />
        </Button>
        <Dialog open={open} onClose={handleClose} maxWidth='xl'>
        <DialogTitle sx={{ borderBottom: '1px solid #0c6525', padding: '5px', marginBottom:'10px'}}>The Powercube</DialogTitle>
            <DialogContent sx={{maxWidth: '560px'}} >
            <ProductInfo 
             id='1'
             name='The Powercube'
             image="https://www-konga-com-res.cloudinary.com/w_700,f_auto,fl_lossy,dpr_1.0,q_auto/media/catalog/product/A/Z/121504_1667161421.jpg"
             description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ea perferendis nesciunt quos at neque dolore totam iste ipsa, dolorem iusto velit fugit animi expedita sunt deserunt voluptatibus quisquam sapiente!'
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
