/*

Rules
1. Figure out number of lines to be printed and write outer loop
2. Figure out what is happening on each line try to connect with outer loop if possible, write inner loop
3. Execute the print statement when needed
4. Observe symmetry(Optional)

*/

/*

Pattern1
*****
*****
*****
*****
*****

Time Complexity = O(n2)

*/


class Solution {
    pattern1(n) {
        //outer loop
        for (let i = 1; i<=n; i++) {
            let res = ""
            for (let j = 1; j <=n; j++) {
                res += "*"
            }
            console.log(res)
        }

    }
}

const sol = new Solution()
sol.pattern1(5)