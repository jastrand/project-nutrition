// loading status
import React from 'react'
import Lottie from 'lottie-react-web'
import animation from 'animation/noproduct.json'


export const CountryNotFound = () => {
  return (
    <>
      <Lottie
        options={{
          animationData: animation,
        }}
        width='300px'
        height='300px'
        autoPlay
      />
    </>
  )
}