import React from 'react'
import styled from 'styled-components'
import Lottie from 'lottie-react-web'
import animation from 'animation/barcode.json'


export const BeforeScan = () => {
  return (
    <Container>
      <Lottie
        options={{
          animationData: animation,
        }}
        width='200px'
        height='200px'
        autoPlay
      />
    </Container>
  )
}

const Container = styled.section`
  margin-top: 50px;
`

