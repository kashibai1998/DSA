/*

Pattern2
*
**
***
****
*****

TC Near to O(n2)

*/

class Solution {
    pattern2(n) {
        for (let i = 1; i <=n; i++) {
            let res = ""
            for (let j = 1; j <= i; j++) {
                res += "*"
            }
            console.log(res)
        }
    }
}
const sol = new Solution()
sol.pattern2(5)