export function priceFormatter(price: number) {
  return Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: "currency",
  }).format(price);
}
