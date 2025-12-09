/*
Input - 5
Output = [1,5]

TC O(digits) -> O(n)
SC O(1)
*/


class Solution {
    divisors(n) {
        let res = []
        for (let i = 1; i <= n; i++) {
            if (n % i == 0) {
                res.push(i)
            }
        }
        return res
    }

    arraySortedOrNot(arr, n) {
        for (let i = 0; i < n - 1; i++) {
            console.log("k", arr[i] > arr[i + 1], arr[i])
            if (arr[i] > arr[i + 1]) {
                return false
            }
        }
        return true
    }

    palindromeCheck(s) {
        //your code goes here

        function check(l, r, s) {
            if (l >= r) return true;

            if (s[l] !== s[r]) return false;

            return check(l + 1, r - 1, s)
        }
        return check(0, s.length - 1, s)
    }

    selectionSort(arr) {
        let n = arr.length
        
        for (let i = 0; i <= n - 2; i++){
            let mini = i
            for (let j = i; j <= n - 1; j++){
                if (arr[j] < arr[mini]) {
                    mini =j
                }
            }

            [arr[i],arr[mini]]=[arr[mini],arr[i]]
        }
        return arr
    }

    bubbleSort(arr) {
        let n=arr.length
        for (let i = n - 1; i >= 1; i--){
            for (let j = 0; j <= i - 1; j++){
                if (arr[j] > arr[j + 1]) {
                    [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                }
            }
        }
        return arr
    }

    mergeSort(arr) {
        if (arr.length <= 1) {
            return arr
        }
        let mid = Math.floor(arr.length / 2)
        let left = arr.slice(0,mid)
        let right = arr.slice(mid)
        console.log(mid, left, right)   
        return this.merge(this.mergeSort(left),this.mergeSort(right))
    }
    merge(left, right) {
        console.log(left, right)
        let i = 0; let j = 0; let res = []
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                res.push(left[i])
                i++
            } else {
                res.push(right[j])
                j++
            }
        }
        while (i < left.length) {
            res.push(left[i])
            i++
        }
        while (j < right.length) {
            res.push(right[j])
            j++
        }
        return res
    }
    qickSort(arr) {
        if (arr.length <= 1) return arr;
    }
}

const sol = new Solution()
// let result = sol.divisors(7)
// console.log("divisors", result)

// let result1 = sol.palindromeCheck("banab")
// console.log("palindromeCheck", result1)


let result1 = sol.mergeSort([3,2,1,5,6])
console.log("mergeSort", result1)