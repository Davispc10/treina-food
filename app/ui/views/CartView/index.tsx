import React, { useContext, useState } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { Appbar, IconButton, List, Button, Snackbar } from 'react-native-paper'
import { NumberService } from '../../../data/services/NumberService'
import { CartContext } from '../../providers/CartProvider'
import { FontAwesome } from '@expo/vector-icons'
import { cartRemoveProduct, cartClear } from '../../../data/actions/CartActions'
import { Product } from '../../../data/reducers/ProductReducer'
import { ApiService } from '../../../data/services/ApiService'

const CartView: React.FC = (props) => {
  const { store: { products }, cartDispatch } = useContext(CartContext)
  const [isMessageVisible, setIsMessageVisible] = useState(false)

  function removeFromCart (product: Product) {
    cartDispatch(cartRemoveProduct(product))
  }

  function getTotal (): string {
    const total = products
      .map(product => (product as any).product.price)
      .reduce((previous, current) => previous + current, 0)

    return NumberService.currency(total)
  }

  function finish () {
    ApiService.post('pedidos', { pedido: products })
    cartDispatch(cartClear())
    setIsMessageVisible(true)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Appbar.Header>
          <Appbar.Content title="Carrinho" />
      </Appbar.Header>

      <ScrollView>
        <List.Section>
          {products.map((product: any) => (
            <List.Item
              key={product.product.id}
              title={product.product.name}
              description={NumberService.currency(product.product.price)}
              right={() =>
                <IconButton
                  onPress={() => removeFromCart(product)}
                  icon={({ size, color }) => <FontAwesome name='times' size={size} color={color} /> }
                />
              }
            />
          ))}

          {products.length !== 0 && <Button mode={'contained'} onPress={finish}>Finalizar Compra ({getTotal()})</Button>}
        </List.Section>
      </ScrollView>

      <Snackbar
        visible={isMessageVisible}
        onDismiss={() => setIsMessageVisible(false)}
        duration={3000}
      >
        Seu pedido foi enviado!
      </Snackbar>
    </SafeAreaView>
  )
}

export default CartView
