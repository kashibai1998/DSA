/*

pattern21
*****
*   *
*   *
*   *
*****

TC O(n2)
*/

class Solution {
    pattern21(n) {
        for (let i = 1; i <= n; i++) {
            let res = ""
            for (let j = 1; j <= n; j++) {
                if (i == 1 || i == n || j == 1 || j == n) {
                    res += "*"
                } else {
                    res += " "
                }
            }
            console.log(res)
        }
    }
}

const sol = new Solution()
sol.pattern21(5)