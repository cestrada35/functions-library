
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

// findMaxAverage([1,12,-5,-6,50,3], 4)
// findMaxAverage([9,7,3,5,6,2,0,8,1,], 6)



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


// containsDuplicate([1,2,3,1])
