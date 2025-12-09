/*

pattern20
*        *
**      **
***    ***
****  ****
**********
****  ****
***    ***
**      **
*        *

TC O(2n2+2n2)
O(4n2)

*/

class Solution {
    pattern20(n) {

        //first half
        for (let i = 1; i <= n; i++) {
            let res = ""

            //for star
            for (let j = 1; j <= i; j++) {
                res += "*"
            }

            //for spaces
            for (let j = 1; j <= 2 * n - 2 * i; j++) {
                res += " "
            }

            //for star
            for (let j = 1; j <= i; j++) {
                res += "*"
            }

            console.log(res)
        }

        //second half
        for (let i = 1; i < n; i++) {
            let res = ""

            //for star
            for (let j = 1; j <= n - i; j++) {
                res += "*"
            }

            //for star
            for (let j = 1; j <= 2 * i; j++) {
                res += " "
            }

            //for star
            for (let j = 1; j <= n - i; j++) {
                res += "*"
            }
            console.log(res)
        }
    }
}

const sol = new Solution()
sol.pattern20(5)