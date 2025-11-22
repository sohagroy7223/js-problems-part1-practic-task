function countNumber(numbers, find) {
    let count = 0;
    for (const number of numbers) {
        if (number === find) {
            count++;
        }
    }
    return count;
}
const number = [5, 6, 11, 12, 5, 98, 5];

console.log(countNumber(number, 5));
console.log(countNumber(number, 25));
