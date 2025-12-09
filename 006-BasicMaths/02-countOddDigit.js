/*
Input - 5627
Output = 2

TC O(digits)
SC O(1)
*/


class Solution {
    countOddDigit(n) {
        if (n === 0) return 0;
        let count = 0;
        while (n > 0) {
            let lastDigit = n % 10
            if (lastDigit % 2 !== 0) count++
            n = Math.floor(n / 10)
        }
        return count
    }
}

const sol = new Solution()
let result = sol.countOddDigit(5627)
console.log("countOddDigit", result)