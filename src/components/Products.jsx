import React from 'react'
import Image from './Image'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { addtocart } from '../slices/addToCartSlice'

const Products = ({productImg,productTitle,productDescription,productQuantity,productPrice}) => {
  let dispatch = useDispatch()
  let handleAddToCart = ()=>{
    //  console.log('shahriar');
    // dispatch(addtocart('ayesha'))
    dispatch(addtocart({
      title: productTitle,
      productPrice: productPrice,
      productImg: productImg,
      productQuantity: 1

    }))
     
  }
  return (
    <>
    <div className="p-5 space-y-2.5">
      <Image imgSrc={productImg}/>
    <div className="flex py-2 justify-between items-center">
      <h3 className='text-[20px] font-medium'>{productTitle}</h3>
      <h3 className='text-[20px] font-medium'>${productPrice}</h3>
    </div>
    <h4 className='text-[14px]'>{productDescription}</h4>
    <h4>Product Quantity: {productQuantity}</h4>
    <Button btnText={'Buy Now'} onClick={handleAddToCart}/>
    </div>
    </>
  )
}

export default Products