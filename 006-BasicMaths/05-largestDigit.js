/*
Input - 5627
Output = 7

TC O(digits) -> O(log10Num)
SC O(1)
*/


class Solution {
    largestDigit(n) {
        let largest = 0;

        while (n > 0) {
            let lastDigit = n % 10
            largest = Math.max(largest, lastDigit)
            n = Math.floor(n / 10)
        }
        return largest
    }
}

const sol = new Solution()
let result = sol.largestDigit(5627)
console.log("largestDigit", result)