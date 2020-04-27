// print data from api ; name of the product, manufacturing countries, environment stats 
// check if the manufacturing countries include sweden
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nutritioninfo, fetchFood } from 'reducers/nutritioninfo'


export const NutritionList = () => {
  // 1. Migrate this to dispatch
  const dispatch = useDispatch();
  // 2. Use selector instead of state
  const food = useSelector((store) => store.nutritioninfo.items);

  useEffect(() => {
    if (food.length) {
      return;
    }
    // 3. Move the fetch to the reducer &  Dispatch a thunk
    dispatch(fetchFood());
  }, [dispatch, food]);

  return (
    <>
      <h1>
        Find me in NutritionList
      </h1>
    </>
  )
}
