// problem: given an array of increasing values, remove dupes, return length of new array, array must be sorted in place
// instinctual solution: Convert array to set, return length and set
// datastructure: two pointers
// plan:
    // iterate through Array, compare value at left/right (0 and 1 postition), increment right on each loop
    // if values are dupes, pass
    // else (new value), move left up, set left = right value
    // until the right reaches end
function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;

    let left = 0;

    for (let right = 1; right < nums.length; right++) {
        if (nums[right] !== nums[left]) {
            left++;
            nums[left] = nums[right];
        }
    }

    return left + 1;
}


// Problem: Given string s, return longest palindromic substring in s
// Structure: //Two pointers
// Plan:
    // Brute:
        // Get all possible sub strings, iterate through each holding onto the max, return at the end
    // two-pointer
        // iterate through s, 
        // even case:
            // treat each char as potential center of palindrome
            // if valid (valid if character to left/right are the same)  
                // then we save the palindrome (and its length)
                // expand window (left/right pointers)
            // else, we move to next iteration
        // odd case:
            // same as the above, but we don't use a center char, we use i, i+1
            // rest of the logic remains the same (use a function).
// Edge Cases:
    // s can be of length 1;
    // two large palindromes within a large string s.
function longestPalindrome(s: string): string {
    if (s.length < 2) return s;
    let palindrome: string = '';
    let currPalindrome: string = '';

    function expandPalindrome(leftIdx: number, rightIdx: number): void {
        while (s[leftIdx] && s[rightIdx] && s[leftIdx] == s[rightIdx]) {
            currPalindrome = s.substring(leftIdx, rightIdx+1);
            if (palindrome.length < currPalindrome.length) palindrome = currPalindrome;
            leftIdx--;
            rightIdx++;
        }
    }
    for (let i = 0; i < s.length; i++) {
        // odd case
        let leftIdx = i-1;
        let rightIdx = i+1;
        expandPalindrome(leftIdx, rightIdx);
        // even case
        leftIdx = i;
        rightIdx = i+1;
        expandPalindrome(leftIdx, rightIdx);
    }

     if ((palindrome.length<1)){
            palindrome = s[0];
    }
    console.log(palindrome); 
    return palindrome;
};