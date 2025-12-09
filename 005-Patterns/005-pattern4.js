/*

Pattern4
1
22
333
4444
55555

TC Near to O(n2)

*/

class Solution {
    pattern4(n) {
        for (let i = 1; i <= n; i++) {
            let res = ""
            for (let j = 1; j <= i; j++) {
                res += i
            }
            console.log(res)
        }
    }
}

const sol = new Solution()
sol.pattern4(5)