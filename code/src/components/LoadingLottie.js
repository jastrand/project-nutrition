// loading status
import React from 'react'
import Lottie from 'lottie-react-web'
import animation from 'animation/burger.json'


export const LoadingLottie = () => {
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