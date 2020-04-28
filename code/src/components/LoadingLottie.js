// loading status
import React from 'react'
import Lottie from 'lottie-react-web'
import animation from 'animation/burger.json'

/* const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
` */

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