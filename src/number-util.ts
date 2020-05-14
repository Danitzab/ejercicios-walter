const formatCurrency = (number: number, fractionDigits: number): string => {
  const formatted = new Intl.NumberFormat('es-CO', {
    style: 'decimal',
    currency: 'COP',
    minimumFractionDigits: fractionDigits,
  }).format(number);
  return `${formatted}`;
};

export { formatCurrency };
