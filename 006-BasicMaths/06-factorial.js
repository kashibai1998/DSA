/*
Input - 5
Output = 1*2*3*4*5 = 120

TC O(digits) -> O(log10Num)
SC O(1)
*/


class Solution {
    factorial(n) {
        let ans = 1;
        for (let i = 1; i <= n; i++) {
            ans = ans * i
        }
        return ans
    }
}

const sol = new Solution()
let result = sol.factorial(5)
console.log("factorial", result)