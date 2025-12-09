/*
Input - 9
Output = false

Brute force
TC O(n * sqrt(n)) 
SC O(1)

*/


class Solution {
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
    primeUptoN(n) {
        let count = 0
        for (let i = 2; i <= n; i++) {
            if (this.isPrime(i)) {
                count++
            }
        }

        return count
    }

}

const sol = new Solution()
let result = sol.primeUptoN(20)
console.log("primeUptoN", result)
