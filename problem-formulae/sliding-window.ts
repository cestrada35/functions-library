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

// a window???

// works for contiguous/harmonious sub arrays
function findLHS(nums: number[]): number {
    // return the length of longest harmonious sub Array
    // datastructure: map (keep count of each element, el,count <key,val>)
    // plan: 
    // initialize window, then iterate through elements, 
        // keep track of count of varied elements, 
        // once new element is encountered, 
            // increase window until harmonious condition is met
            // remove leftmost element and count, repeat 

    // what if arr is size 1 or first two els are not harmonious or first two elements are the same
    const window = new Map<number, number>();
    window.set(nums[0], 1)
    window.set(nums[1], 1)
    let lHS = 2; 
    let hS = 2;


    function isHarmonious(value: number) {
        if (Math.abs(nums[1] - value) >= 1) {
            return true;
        }
        return false;
    }

    for (let i = 2; i < nums.length; i++) {
        if ( window.has(nums[i]) && (isHarmonious(nums[i])) ){
            let count = window.get(nums[i]) ?? 0;
            window.set(nums[i], count+1);
            hS++;
            lHS = Math.max(lHS, hS)
        } else if ( isHarmonious(nums[i]) ) {
            // a new element, add to map, remove first key
            window.set(nums[i], 1);
            window.delete(nums[0]);
            hS-=window.get(nums[0]) ?? 0;
        } else {
            // not harmonious, new element,
            window.set(nums[i], 1);
            window.delete(nums[0]);
            hS = 1;
        }
    }
    return lHS!;
}

findLHS([1,3,2,2,5,2,3,7])