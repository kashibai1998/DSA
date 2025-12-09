/*

Pattern6
12345
1234
123
12
1

TC Near to O(n2)


*/

class Solution {
    pattern6(n) {
        for (let i = 1; i <= n; i++) {
            let res = ""
            for (let j = 1; j <= n - i + 1; j++) {
                res += j
            }
            console.log(res)
        }
    }
}

const sol = new Solution()
sol.pattern6(5)