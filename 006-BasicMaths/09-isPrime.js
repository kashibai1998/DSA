/*
Input - 9
Output = false

Brute force
TC O(n) 
SC O(1)

optimized 
TC O(sqrt(n)) 
SC O(1)
*/


class Solution {

    isPrimeBrute(n) {
        if (n == 1) return true;

        for (let i = 2; i <= n - 1; i++) {
            if (n % i == 0) {
                return false
            }
        }

        return true
    }

    isPrime(n) {
        if (n == 1) return true;

        for (let i = 2; i * i <= n; i++) {
        // for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false
            }
        }

        return true
    }
}

const sol = new Solution()
let result = sol.isPrimeBrute(36)
console.log("isPrimeBrute", result)

let result2 = sol.isPrime(7)
console.log("isPrime", result2)