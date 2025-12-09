/*
Input - 36
Output = false

Brute force
TC O(n) 
SC O(1)

optimized 
TC O(sqrt(n)) 
SC O(1)
*/


class Solution {

    isPerfectBrute(n) {
        let sum = 1;

        for (let i = 2; i <= n - 1; i++) {
            if (n % i == 0) {
                sum = sum + i
            }
        }

        return sum === n
    }

    isPerfect(n) {
        if (n == 1) return false;
        let sum = 0;

        // for (let i = 2; i * i <= n; i++) {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                sum = sum + i
                if (i != Math.floor((n / i))) {
                    sum = sum + Math.floor((n / i))
                }
            }
        }

        return sum === n
    }
}

const sol = new Solution()
let result = sol.isPerfectBrute(36)
console.log("isPerfectBrute", result)

let result2 = sol.isPerfect(1)
console.log("isPerfect", result2)