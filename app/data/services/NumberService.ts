export const NumberService = {
  currency (value: number): string {
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })

    return formatter.format(value)
  }
}
