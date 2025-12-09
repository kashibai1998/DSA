/*

Pattern3
1
12
123
1234
12345

TC Near to O(n2)



*/

class Solution {
    pattern3(n) {
        for (let i = 1; i <= n; i++) {
            let res = ""
            for (let j = 1; j <= i; j++) {
                res += j
            }
            console.log(res)
        }
    }
}

const sol = new Solution()
sol.pattern3(5)