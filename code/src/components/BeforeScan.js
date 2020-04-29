import React from 'react'
import Lottie from 'lottie-react-web'
import animation from 'animation/barcode.json'


export const BeforeScan = () => {
  return (
    <>
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