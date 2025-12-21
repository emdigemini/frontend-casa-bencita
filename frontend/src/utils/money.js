export function calculatePrice(money, nights) {
  const total = money * nights;
  return total.toLocaleString('en-PH');
}