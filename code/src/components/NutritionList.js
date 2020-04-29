// print data from api ; name of the product, manufacturing countries, environment stats 
// check if the manufacturing countries include sweden
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { BeforeScan } from './BeforeScan'
import { ProductNotFound } from './ProductNotFound'
import { CountryNotFound } from './CountryNotFound'

export const NutritionList = () => {

  const food = useSelector((store) => store.nutritionInfo.productDetails);

  if (food.status === 1) {
    return (
      <Container>
        {food.product.origins_tags !== "sweden" && <CountryNotFound />}
        <Title>{food.product.origins_tags === "sweden" ? "Yay it's Swedish!" : "Oh no! The origin country is either missing or your product is not from Sweden"}</Title>
        <Text>Product name: {food.product.product_name_sv}</Text>
        <Text>{!food.product.origins_tags ? "" : `Origin: ${food.product.origins_tags}`}</Text>
        <Text>{!food.product.manufacturing_places_tags ? "" : `Manufacturing: ${food.product.manufacturing_places_tags}`}</Text>
        <Text>Ingredients: {food.product.ingredients_text}</Text>
      </Container>
    );
  } else if (food.status === 0) {
    return (
      <ProductNotFound />
    );
  } else {
    return (
      <BeforeScan />
    );
  }
};

const Container = styled.section`
  margin: 50px;
  text-align: center;

  @media (min-width: 900px) {
    margin: 50px 200px;
  }
`;

const Title = styled.p`
  font-size: 25px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 40px;
`

const Text = styled.p`
  font-size: 20px;
  `
