var data = require('currency-codes/data');

export const currencyFormatter = {
  '/': (a, b) => (Number(a) / b).toFixed(3),
  '*': (a, b) => (Number(a) * b).toFixed(3)
};

export function convertCountryCode(selectedCurrency) {
  const country = data.find(a => a.code === selectedCurrency)
  if (country) {
    return country.countries[0]
  }
}