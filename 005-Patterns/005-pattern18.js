/*

pattern18
D
CD
BCD
ABCD
TC Near to O(n2)
*/

class Solution {
    pattern18(n) {

        for (let i = 0; i < n; i++) {
            let res = ""
            for (let ch = "A".charCodeAt(0) + n - 1 - i; ch <= "A".charCodeAt(0) + n - 1; ch++){
                res += String.fromCharCode(ch)
            }
            console.log(res)
        }
    }
}

const sol = new Solution()
sol.pattern18(4)