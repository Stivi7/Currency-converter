export const SWAP_CURRENCY = 'SWAP_CURRENCY';
export const CHANGE_CURRENCY_AMOUNT = 'CHANGE_CURRENCY_AMOUNT'

export const swapCurrency = () => ({
  type: SWAP_CURRENCY,
})

export const changeCurrencyAmount = (payload) => ({
  type: CHANGE_CURRENCY_AMOUNT,
  payload: parseFloat(payload),
})