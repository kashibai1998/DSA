/*
Input - 5
Output = 1*2*3*4*5 = 120

TC O(digits) -> O(log10Num)
SC O(1)
*/


class Solution {
    countDigit(n) {
        let count = Math.floor(Math.log10(n)) + 1
        return count
    }

    isArmstrong(n) {
        let count = this.countDigit(n)
        let sum = 0
        let copy = n;

        while (n > 0) {
            let lastDigit = n % 10
            sum += Math.pow(lastDigit, count)
            n = Math.floor(n / 10)
        }

        return sum === copy
    }
}

const sol = new Solution()
let result = sol.isArmstrong(30)
console.log("isArmstrong", result)