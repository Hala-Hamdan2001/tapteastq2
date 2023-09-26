var missingNumber = function(nums) {
    let n = nums.length;
    let expectedSum = (n * (nums.length + 1)) / 2;
    let actualSum = nums.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
};

// Test cases
console.log(missingNumber([3, 0, 1])); // Output: 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Output: 8
console.log(missingNumber([0, 1])); // Output: 2