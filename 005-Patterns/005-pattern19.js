/*

pattern19
**********
****  ****
***    ***
**      **
*        *
*        *
**      **
***    ***
****  ****
**********

TC O(2*n2 +2*n2)
O(4n2)
*/

class Solution {
    pattern19(n) {
        let ch = "A"
        //first half
        for (let i = 1; i <= n; i++) {
            let res = ""

            //first half
            //for star
            for (let j = 1; j <= n - i + 1; j++) {
                res += "*"
            }

            //for spaces 
            for (let j = 1; j <= 2 * i - 2; j++) {
                res += " "
            }

            //for star
            for (let j = 1; j <= n - i + 1; j++) {
                res += "*"
            }

            console.log(res)
        }

        //second half
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


    }
}

const sol = new Solution()
sol.pattern19(5)