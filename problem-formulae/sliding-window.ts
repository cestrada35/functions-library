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

findLHS([1,3,2,2,5,2,3,7]);