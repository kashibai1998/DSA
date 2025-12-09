/*
Input - 5627
Output = false

Input - 121
Output = true

TC O(digits) -> O(log10Num)
SC O(1)
*/


class Solution {
    isPalindrome(n) {
        let newNum = 0;
        let copy = n
        while (n > 0) {
            let lastDigit = n % 10;
            newNum = newNum * 10 + lastDigit;
            n = Math.floor(n / 10)
        }
        return newNum === n
    }
}

const sol = new Solution()
let result = sol.isPalindrome(5627)
console.log("isPalindrome", result)