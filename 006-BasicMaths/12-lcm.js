/*
Input - 35,10
Output = 5

lcm = n1*n2/(gcd(n1,n2))

Brute force
TC O(min(n1,n2)) 
SC O(1)

*/


class Solution {
    lcm(n1, n2) {
        let i = 1;
        let n = Math.max(n1, n2)

  
        while (1) {
            let multiple = i * n
            if (multiple % n1 == 0 && multiple % n2 == 0) {
                return multiple
            }
            i++
        }
    }
}

const sol = new Solution()
let result = sol.lcm(3, 5)
console.log("gcd", result)
