/*

pattern17
    A    
   ABA   
  ABCBA  
 ABCDCBA 
ABCDEDCBA

TC Near to O(2*n2)
*/

class Solution {
    pattern17(n) {


        for (let i = 1; i <= n; i++) {
            let res = ""

            //for spaces
            for (let j = 1; j <= n - i; j++) {
                res += " "
            }

            //for char incresing till i and descresing
            let ch = "A"
            for (let j = 1; j <= 2 * i - 1; j++) {
                res += ch

                if (j < i) {
                    ch = String.fromCharCode(ch.charCodeAt(0) + 1)
                } else {
                    ch = String.fromCharCode(ch.charCodeAt(0) - 1)
                }
            }

            //for spaces
            for (let j = 1; j <= n - i; j++) {
                res += " "
            }
            console.log(res)
        }
    }
}

const sol = new Solution()
sol.pattern17(5)