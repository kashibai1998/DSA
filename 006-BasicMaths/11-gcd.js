/*
Input - 35,10
Output = 5

Brute force
TC O(min(n1,n2)) 
SC O(1)

*/


class Solution {
    gcdBrute(n1, n2) {
        let largest = 1;
        // 1 to min
        // for (let i = 1; i <= Math.min(n1, n2); i++) {
        //     if (n1 % i == 0 && n2 % i == 0) {
        //         largest = i
        //     }
        // }

        //min to 1
        for (let i = Math.min(n1, n2); i >= 1; i--) {
            if (n1 % i == 0 && n2 % i == 0) {
                return i
            }
        }
        return 1
    }
    gcd(n1, n2) {
        while (n1 != 0 && n2 != 0) {
            if (n1 > n2) {
                // n1 = n1 - n2
                n1 = n1 % n2
            } else {
                // n2 = n2 - n1
                n2 = n2 % n1
            }
        }
        if (n2 == 0) return n1
        else return n2
    }

}

const sol = new Solution()
let result = sol.gcdBrute(35, 10)
console.log("gcd", result)
