function fibonacci(n) {
  const numbers = [0, 1];
  for (let i = 2; i < n; i++) {
    numbers[i] = numbers[i - 1] + numbers[i - 2];
  }
  return numbers.splice(1);
}

console.log(fibonacci(20));
