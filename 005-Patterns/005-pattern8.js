/*

Pattern8
*********
 ******* 
  *****  
   ***   
    *    

TC O(n2)

*/

class Solution {
    pattern8(n) {
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
sol.pattern8(5)