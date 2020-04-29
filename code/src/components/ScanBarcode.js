import React, { useState } from 'react'
import styled from 'styled-components'
import { BarcodeScanner } from './BarcodeScanner'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFood } from 'reducers/nutritionInfo'
import { LoadingLottie } from './LoadingLottie'
import { NutritionList } from './NutritionList'

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()
  const isLoading = useSelector((store) => store.ui.isLoading)

  return (
    <StartSection>
      {showScanner && (
        <BarcodeScanner
          onDetected={(code) => {
            setShowScanner(false);
            dispatch(fetchFood(code));
          }}
        />
      )}
      {isLoading && <LoadingLottie />}
      {!isLoading && !showScanner && <NutritionList />}
      {!showScanner && (
        <Button type="button" onClick={() => setShowScanner(true)}>
          Show scanner
        </Button>
      )}
    </StartSection>
  )
}

const StartSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Button = styled.button`
  font-size: 30px;
  color: #000;
  border-radius: 10px;
  background: #f1f1f1;
`