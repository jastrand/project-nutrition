// print data from api ; name of the product, manufacturing countries, environment stats 
// check if the manufacturing countries include sweden
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { BeforeScan } from './BeforeScan'
import { ProductNotFound } from './ProductNotFound'

export const NutritionList = () => {

  const food = useSelector((store) => store.nutritionInfo.productDetails);

  if (food.status === 1) {
    return (
      <Container>
        <p>Product name: {food.product.product_name_sv}</p>
        <p>Origin: {food.product.origins_tags}</p>
        <p>Manufacturing: {food.product.manufacturing_places_tags}</p>
        <p>Ingredients: {food.product.ingredients_text}</p>
        {/* {food.product.origins_tags === sweden ? "Yay its Swedish" : "Oh no, your food is not from Sweden!"} */}
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
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 500px;
`;

//   if (food.status === 1) {
//     return (
//       <div>
//         <h1>Product name: {food.product.product_name_sv}</h1>
//         <h1>Origin: {food.product.origins_tags}</h1>
//       </div>
//     )
//   } else if (food.status === 0) { // If product was not found
//     return (
//       <div>
//         <h1>Sorry, no product found!</h1>
//         <ScanBarcode />
//       </div>
//     )
//   } else {
//     return (
//       <ScanBarcode />
//     )
//   }
// }
