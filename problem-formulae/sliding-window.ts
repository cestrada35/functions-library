let verbose = false;

// Optimal:
// time O(n)
// space: O(min(n, k+1))
//
function containsNearbyDuplicateOptimal(nums: number[], k: number, verbose: boolean): boolean {
    if (k < 1 || nums.length < 2) return false;
    const lastSeen = new Map<number, number>();
    for (let j = 0; j < nums.length; j++) {
        const prev = lastSeen.get(nums[j]);
        if (prev !== undefined && j - prev <= k) {
            if (verbose) console.log('True'); 
            return true;
        }
        lastSeen.set(nums[j], j);
    }
    if (verbose) console.log('False')
    return false;
}

// Optimal:
// time O(n)
// space: O(1)
//
function findMaxAverage(nums: number[], k: number): number {
    let windowSum = 0;
    let maxSum = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        windowSum += nums[i];
        if (i >= k) windowSum -= nums[i - k];   // evict left
        if (i >= k - 1) maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum / k;
};

//contains dupe 
// return true if a value appears twice in array
// iff with nums i == nums j
function containsDuplicate(nums: number[]):
boolean {
    let exists = new Set<number>();

    for (let i = 0; i < nums.length; i++){
        if (exists.has(nums[i])) return true;
        exists.add(nums[i])
    }
    return false;
};

function findLHS(nums: number[]): number {
    // Create a frequency map to count occurrences of each number
    const frequencyMap: Record<number, number> = {};
  
    // Count the frequency of each number in the array
    for (const num of nums) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }
  
    // Track the maximum length of harmonious subsequence
    let maxLength = 0;
  
    // Iterate through each unique number and its frequency
    for (const [numStr, frequency] of Object.entries(frequencyMap)) {
        // Convert string key back to number and calculate the next consecutive number
        const currentNum = Number(numStr);
        const nextNum = currentNum + 1;
      
        // Check if the next consecutive number exists in the frequency map
        if (frequencyMap[nextNum]) {
            // Update max length with sum of current and next number frequencies
            maxLength = Math.max(maxLength, frequency + frequencyMap[nextNum]);
        }
    }
    console.log(maxLength)
    return maxLength;
}

// Find repeated substrings with length k = 10 (fixed window)
// return them in an array
// data structure: map <sequence, count>
// plan: traverse once, store all sets of 10, if a repeat, update the count
//  Return all sequences with counts greater than 1;
function findRepeatedDnaSequences(s: string): string[] {
    const k = 10;
    const seen = new Set<string>();
    const result = new Set<string>();
    for (let i = 0; i <= s.length - k; i++) {
        const seq = s.slice(i, i + k);
        if (seen.has(seq)) result.add(seq);
        else seen.add(seq);
    }
    return [...result];
}


// pull max until element is reached
// Find the minimum length of a contiguous sub array who will add up to (or be greater than) a target value, otherwise return 0
// data struct: pointers
// plan, move left pointer when constraint is satisfied, move right when not, keep track of min
function minSubArrayLen(target: number, nums: number[]): number {
    let left = 0; 
    let right = 0;
    let sum = 0;
    let minimum = Infinity;
    for (right; right < nums.length; right++) {
        sum += nums[right];
        while (sum >= target) {
            let localmin = right - left + 1;
            minimum = Math.min(minimum, localmin);
            sum -= nums[left];
            left++;
        }
    }
    (minimum != Infinity) ? minimum: 0;
};

// find longest substring, contiguous without dupes
// data struct: pointers/ sliding window (set - no dupes)
// plan:
    // iterate through array by increasing position of right of window
        // add new element to set, compare max
    // if element is a dupe, increment left window, remove element from set
function lengthOfLongestSubstring(s: string): number {
    const window = new Set<string>();
    let maxLen = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        while (window.has(s[right])) {
            window.delete(s[left]);
            left++;
        }
        window.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}
