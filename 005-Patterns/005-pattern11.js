/*

Pattern11
1 
0 1 
1 0 1 
0 1 0 1 
1 0 1 0 1 

TC O(n2)
*/

class Solution {
    pattern11(n) {
        for (let i = 1; i <= n; i++) {
            let res = ""
            let start = 1;
            if (i % 2 == 0) {
                start = 0
            }
            for (let j = 1; j <= i; j++) {
                res += start + " "
                start = 1 - start
            }
            console.log(res)
        }
    }
}

const sol = new Solution()
sol.pattern11(5)