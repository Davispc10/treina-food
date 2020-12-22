import React, { useContext, useState } from 'react'
import { ScrollView } from 'react-native'
import { List, Checkbox, Button } from 'react-native-paper'
import { cartAddProduct } from '../../../data/actions/CartActions'
import { productSelect } from '../../../data/actions/ProductActions'
import { CartContext } from '../../providers/CartProvider'
import { ProductContext } from '../../providers/ProductProvider'
import { Product } from '../../../data/reducers/ProductReducer'
import { NoteInput } from './styles'

const ProductDetail: React.FC = () => {
  const { store, productDispatch } = useContext(ProductContext)
  const { cartDispatch } = useContext(CartContext)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [note, setNote] = useState('')

  function isOptionSelected (option: string) {
    return selectedOptions.includes(option)
  }

  function tooggleOption (option: string) {
    let newOptionList = []

    if (isOptionSelected(option)) {
      newOptionList = selectedOptions.filter(product => product !== option)
    } else {
      newOptionList = [...selectedOptions, option]
    }

    setSelectedOptions(newOptionList)
  }

  function sendToCart () {
    const { id, name, price } = store.selectedProduct as Product

    cartDispatch(cartAddProduct({
      product: { id, name, price },
      note,
      selectedOptions
    }))

    back()
  }

  function back () {
    productDispatch(productSelect(null))
  }

  return (
    <ScrollView>
      <List.Section>
        <List.Subheader>Opções</List.Subheader>
        {store.selectedProduct?.options.map((option: string) => (
          <List.Item
            key={option}
            title={option}
            right={(props) => (
              <Checkbox
                {...props}
                status={isOptionSelected(option) ? 'checked' : 'unchecked'}
                onPress={() => tooggleOption(option)}
              />
            )}
          />
        ))}
      </List.Section>

      <NoteInput
        label={'Observação'}
        value={note}
        mode={'outlined'}
        multiline={true}
        onChangeText={setNote}
      />

      <Button mode={'contained'} onPress={sendToCart}>
        Adicionar ao carrinho
      </Button>
    </ScrollView>
  )
}

export default ProductDetail
