import React from 'react'
import styled from 'styled-components'

export const Header = () => {
  return (
    <Container>
      <Title>Is your food made in Sweden?</Title>
    </Container>
  )
}

const Container = styled.section`
  text-align: center;
  font-weight: bold;
  margin-top: 50px;
`
const Title = styled.text`
  font-size: 60px;
  background: -webkit-linear-gradient(45deg, #0000FF, #FFD700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
`