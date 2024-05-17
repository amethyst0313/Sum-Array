var array_of_numbers = [2, 3, -1, 5, 7, 9, 10, 15, 95];
var sum = sumArray(array_of_numbers);

function sumArray(arr) {
  return arr.reduce((total, current) => total + current, 0);
}

console.log(sum);
