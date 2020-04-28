// print data from api ; name of the product, manufacturing countries, environment stats 
// check if the manufacturing countries include sweden
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nutritionInfo, fetchFood } from 'reducers/nutritionInfo'
import { ScanBarcode } from './ScanBarcode';


export const NutritionList = () => {
  // 1. Migrate this to dispatch
  const dispatch = useDispatch();
  // 2. Use selector instead of state

  const food = useSelector((store) => store.nutritionInfo.productDetails);

  /* useEffect(() => {
    // 3. Move the fetch to the reducer &  Dispatch a thunk
    dispatch(fetchFood());
  }, [dispatch, food]);
 */
  if (food.status === 1) {
    return (
      <>
        <h1>Product name: {food.product.product_name_sv}</h1>
        <h1>Origin: {food.product.origins_tags}</h1>
      </>
    )
  } else if (food.status === 0) {
    return (
      <>
        <p>Product is not found!</p>
      </>
    )
  } else {
    return (
      <>
        <ScanBarcode />
      </>
    )
  }
}
