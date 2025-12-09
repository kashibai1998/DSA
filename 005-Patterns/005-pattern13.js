/*

Pattern13
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 

TC Near to O(n2)
*/

class Solution {
    pattern13(n) {
        let cnt = 1;
        for (let i = 1; i <= n; i++) {
            let res = ""

            for (let j = 1; j <= i; j++) {
                res += cnt + " "
                cnt++
            }
            console.log(res)
        }
    }
}

const sol = new Solution()
sol.pattern13(5)