import React from 'react'
import styled from 'styled-components'
import Lottie from 'lottie-react-web'
import animation from 'animation/sad.json'


export const ProductNotFound = () => {
  return (
    <>
      <Title>Oh noooo! The product is not found</Title>
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

const Title = styled.text`
  margin: 50px;
  font-size: 35px;
  font-weight: bold;
`