export function formatCurrency (dong) {
  return dong.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}
export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}