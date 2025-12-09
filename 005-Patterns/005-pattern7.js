/*

Pattern7
    *    
   ***   
  *****  
 ******* 
*********

TC O(n2)



*/

class Solution {
    pattern7(n) {
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
    }
}

const sol = new Solution()
sol.pattern7(5)