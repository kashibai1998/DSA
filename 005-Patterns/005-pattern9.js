/*

Pattern9
    *    
   ***   
  *****  
 ******* 
*********
*********
 ******* 
  *****  
   ***   
    *    
TC O(2*n2)


*/

class Solution {
    pattern9(n) {
        for (let i = 1; i <= n; i++) {
            let res = ""
            //spaces n-i
            for (let j = 1; j <= n - i; j++) {
                res += " "
            }

            //star 2*i-1
            for (let j = 1; j <= 2 * i - 1; j++) {
                res += "*"
            }

            //spaces n-i
            for (let j = 1; j <= n - i; j++) {
                res += " "
            }
            console.log(res)
        }
        for (let i = 1; i <= n; i++) {
            let res = ""
            //spaces i-1
            for (let j = 1; j <= i - 1; j++) {
                res += " "
            }

            //star (2n-1)-2(i-1)
            for (let j = 1; j <= (2 * n - 1) - 2 * (i - 1); j++) {
                res += "*"
            }

            //spaces i-1
            for (let j = 1; j <= i - 1; j++) {
                res += " "
            }
            console.log(res)
        }
    }
}

const sol = new Solution()
sol.pattern9(5)