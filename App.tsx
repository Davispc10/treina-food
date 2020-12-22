import React, { useState, useEffect } from 'react'
import Main from './Main'
import { DefaultTheme, Provider } from 'react-native-paper'
import ProductProvider from './app/ui/providers/ProductProvider'
import CartProvider from './app/ui/providers/CartProvider'

const theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#a91f1f',
    background: '#6abb6a'
  }
}

const theme2 = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ca2b2b'
    // background: '#8791a3'
  }
}

export default function App () {
  const [value, setValue] = useState(1)

  useEffect(() => {
    setTimeout(() => {
      setValue(2)
    }, 4000)
  }, [])

  return (
    <Provider theme={value === 1 ? theme : theme2}>
      <ProductProvider>
        <CartProvider>
          <Main />
        </CartProvider>
      </ProductProvider>
    </Provider>
  )
}
