/*

Pattern14
A
AB
ABC
ABCD
ABCDE

TC Near to O(n2)
*/

class Solution {
    pattern14(n) {

        for (let i = 1; i <= n; i++) {
            let res = ""
            let ch = "A"
            for (let j = 1; j <= i; j++) {
                res += ch
                ch = String.fromCharCode(ch.charCodeAt(0) + 1)
            }
            console.log(res)
        }
    }
}

const sol = new Solution()
sol.pattern14(5)