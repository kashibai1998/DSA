/*
Input - 5627

Output = 4

TC O(digits)
SC O(1)
*/

class Solution {
    countDigit(n) {
        if (n === 0) return 1;
        let count = 0;
        while (n > 0) {
            n = Math.floor(n / 10);
            count = count + 1
        }
        console.log(count)
    }
}

const sol = new Solution()
sol.countDigit(5627)