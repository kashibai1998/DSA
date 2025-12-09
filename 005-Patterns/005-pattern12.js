/*

Pattern12
1        1
12      21
123    321
1234  4321
1234554321

TC (2*n2)
*/

class Solution {
    pattern12(n) {
        for (let i = 1; i <= n; i++) {
            let res = ""

            //for increasing j to i
            for (let j = 1; j <= i; j++) {
                res += j
            }

            //for middle spaces
            for (let j = 1; j <= 2 * n - 2 * i; j++) {
                res += " "
            }

            //for mirror j 
            for (let j = i; j >= 1; j--) {
                res += j
            }

            console.log(res)
        }
    }
}

const sol = new Solution()
sol.pattern12(5)