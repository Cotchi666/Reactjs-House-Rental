import React from "react"
import Heading from "../common/Heading"
import "./Cart.css"
import CartScreen from "./CartScreen"

const CartListScreen = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='' />
          <CartScreen/>
        </div>
      </section>
    </>
  )
}

export default CartListScreen
