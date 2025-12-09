/*

Pattern15
ABCDE
ABCD
ABC
AB
A

TC Near to O(n2)
*/

class Solution {
    pattern15(n) {

        for (let i = 1; i <= n; i++) {
            let res = ""
            let ch = "A"
            for (let j = 1; j <= n - i + 1; j++) {
                res += ch
                ch = String.fromCharCode(ch.charCodeAt(0) + 1)
            }
            console.log(res)
        }
    }
}

const sol = new Solution()
sol.pattern15(5)