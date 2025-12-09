/*

Pattern10
*
**
***
****
*****
****
***
**
* 

TC O(n2 + (n-1)2)

*/

class Solution {
    pattern10(n) {
        for (let i = 1; i <= n; i++) {
            let res = ""
            for (let j = 1; j <= i; j++) {
                res += "*"
            }
            console.log(res)
        }

        for (let i = 1; i <= n - 1; i++) {
            let res = ""

            for (let j = 1; j <= n - i; j++) {
                res += "*"
            }
            console.log(res)
        }
    }

}

const sol = new Solution()
sol.pattern10(5)