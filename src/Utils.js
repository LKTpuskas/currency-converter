
export const currencyFormatter = {
  '/': (a, b) => (Number(a) / b).toFixed(3),
  '*': (a, b) => (Number(a) * b).toFixed(3)
};
