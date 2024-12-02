function countFractionOnes(binaryString) {
    let fraction = binaryString.slice(12);

    let count = 0;

    for (let i = 0; i < fraction.length; ++i) {
        if (fraction[i] === '1') {
            count++;
        }
    }

    return count;
}

console.log(countFractionOnes("1100000000011010000000000000000000000000000000000000000000000000"));
// Output: 1

console.log(countFractionOnes("0011111110111001100110011001100110011001100110011001100110011010"));
// Output: 21