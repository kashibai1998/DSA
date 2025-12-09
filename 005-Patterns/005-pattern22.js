/*

pattern22
555555555
544444445
543333345
543222345
543212345
543222345
543333345
544444445
555555555

TC O(2n-1)2

*/

class Solution {
    pattern22(n) {

        for (let i = 1; i <= 2 * n - 1; i++) {
            let res = ""

            for (let j = 1; j <= 2 * n - 1; j++) {
                let top = i - 1;
                let left = j - 1

                let right = 2 * n - 1 - j
                let bottom = 2 * n - 1 - i
                let val = n - Math.min(top, bottom, left, right)
                res += val
            }
            console.log(res)
        }
    }
}

const sol = new Solution()
sol.pattern22(5)