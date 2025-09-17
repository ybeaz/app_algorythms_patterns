type CartItemType = {
  id: number
  name: string
  quantity: number
}

const get125UpdatedProductCart = (cart: CartItemType[], product: CartItemType): CartItemType[] => {
  let cartNext = [...cart]

  const index = cartNext.findIndex((cartItem: CartItemType) => cartItem.id === product.id)
  if (index !== -1) cartNext[index] = product
  else cartNext.push(product)

  return cartNext
}

/**
 * @description Here the file is being run directly
 * @run ts-node src/roman/algorythms/get125UpdatedProductCart.ts
 */
if (require.main === module) {
  ;(async () => {
    const cart = [
      { id: 1, name: 'Apple', quantity: 2 },
      { id: 2, name: 'Banana', quantity: 5 },
      { id: 3, name: 'Orange', quantity: 3 },
    ]

    const productNew = { id: 2, name: 'Banana', quantity: 10 }
    const output = get125UpdatedProductCart(cart, productNew)

    const productNew2 = { id: 4, name: 'Mango', quantity: 7 }
    const output2 = get125UpdatedProductCart(cart, productNew2)

    console.info('get125UpdatedProductCart [34]', { output, output2 })
  })()
}
