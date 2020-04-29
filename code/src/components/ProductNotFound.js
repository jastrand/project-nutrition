import React from 'react'
import Lottie from 'lottie-react-web'
import animation from 'animation/sad.json'


export const ProductNotFound = () => {
  return (
    <>
      <h2>Oh noooo! The product is not found</h2>
      <Lottie
        options={{
          animationData: animation,
        }}
        width='200px'
        height='200px'
        autoPlay
      />
    </>
  )
}