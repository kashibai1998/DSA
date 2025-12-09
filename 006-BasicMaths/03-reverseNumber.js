/*
Input - 5627
Output = 7265

TC O(digits)
SC O(1)
*/


class Solution {
    reverseNumber(n) {
        let newNum = 0;
        while (n > 0) {
            let lastDigit = n % 10;
            newNum = newNum * 10 + lastDigit;
            n = Math.floor(n / 10)
        }
        return newNum
    }
}

const sol = new Solution()
let result = sol.reverseNumber(5627)
console.log("reverseNumber", result)