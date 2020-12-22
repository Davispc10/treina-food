import numeral from 'numeral'

export const NumberService = {
  currency (value: number): string {
    return 'R$ ' + numeral(value).format('0,0.00')
  }
}

// export const NumberService = {
//   currency (value: number): string {
//     const formatter = new Intl.NumberFormat('pt-BR', {
//       style: 'currency',
//       currency: 'BRL'
//     })

//     return formatter.format(value)
//   }
// }
