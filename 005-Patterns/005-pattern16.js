/*

Pattern16
A
BB
CCC
DDDD
EEEEE

TC Near to O(n2)
*/

class Solution {
    pattern16(n) {
        let ch = "A"

        for (let i = 1; i <= n; i++) {
            let res = ""
            for (let j = 1; j <= i; j++) {
                res += ch
            }
            ch = String.fromCharCode(ch.charCodeAt(0) + 1)
            console.log(res)
        }
    }
}

const sol = new Solution()
sol.pattern16(5)