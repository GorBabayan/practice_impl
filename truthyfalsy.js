function evaluateTruthiness(arr) {
    const result = {
        truthy : [],
        falsy : []
    };

    arr.forEach(value => {
        if (value) {
            result.truthy.push(value);
        } else {
            result.falsy.push(value);
        }
    });

    return result;
}

console.log(evaluateTruthiness([0, 1, "", "hello", null, undefined, false, true, [], {}]));
// Output: { truthy: [1, "hello", true, [], {}], falsy: [0, "", null, undefined, false] }