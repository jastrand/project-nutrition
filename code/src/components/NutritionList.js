// print data from api ; name of the product, manufacturing countries, environment stats 
// check if the manufacturing countries include sweden
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScanBarcode } from './ScanBarcode';
import { BeforeScan } from './BeforeScan'
import { ProductNotFound } from './ProductNotFound'

export const NutritionList = () => {

  const food = useSelector((store) => store.nutritionInfo.productDetails);

  if (food.status === 1) {
    return (
      <div>
        <p>Product name: {food.product.product_name_sv}</p>
        <p>Origin: {food.product.origins_tags}</p>
        {/* {food.product.origins_tags === Sweden ? "Yay its Swedish" : "Not Swedish"} */}
      </div>
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
