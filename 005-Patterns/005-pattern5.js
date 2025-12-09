/*

Pattern5
*****
****
***
**
*

TC Near to O(n2)

*/

class Solution {
    pattern5(n) {
        for (let i = 1; i <= n; i++) {
            let res = ""
            for (let j = 1; j <= n - i + 1; j++) {
                res += "*"
            }
            console.log(res)
        }
    }
}

const sol = new Solution()
sol.pattern5(5)