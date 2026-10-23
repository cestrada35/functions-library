


// return true when there's a duplicate, abs(left-right) <= k
function containsNearbyDuplicate(nums: number[], k: number, verbose: boolean): boolean {
    
    if (k < 1 || nums.length < 2) return false; // Edge case handling
    
    // initialize left and right pointers for the sliding window
    let i = 0;
    let j = 1;

    const hashMap = new Map<number, string>();
    hashMap.set(nums[i], i.toString());
    hashMap.set(nums[j], j.toString());
    

    function windowSize(i: number, j: number): number {
        return Math.abs(i - j);
    }
    function existsInHashMap(num: number): boolean {
        return hashMap.has(num);
    }
    function isDuplicateWithinK(i: number, j: number): boolean {
        if (verbose) console.log(i, j, nums[j], k)
        return (Math.abs(j - parseInt(hashMap.get(nums[j])!)) <= k)
    }

    // Slide window with size k
    for (i; i < nums.length; i++) {
        if (nums[i] == nums[j] && i != j) {
            console.log('Duplicate found at index: ', i, j)
            return true;
        } 
        while (j < nums.length-1 && windowSize(i, j) < k) {
            // increment window size until it reaches k or the end of the array
            j++;
            if (verbose) console.log('incrementing right window size at current index: ', i, j, windowSize(i, j), (existsInHashMap(nums[j])), nums[j], isDuplicateWithinK(i, j), ((((existsInHashMap(nums[j]) && isDuplicateWithinK(i, j)) ))) )
            //  hashMap.set(nums[j], j.toString());
            //  containsNearbyDuplicate([1,2,3,1,2,3], 2, verbose) // false 
            if (
                    (windowSize(i, j) <= k && nums[j] == nums[i])
                        ||
                    (existsInHashMap(nums[j]) && (isDuplicateWithinK(i, j)) )
            ) {
                // if new window contains a duplicate, return true
                if ((windowSize(i, j) <= k && nums[j] == nums[i])) console.log('Duplicate found at right index expansion: ', i, j)
                if ( (((existsInHashMap(nums[j]) && isDuplicateWithinK(i, j)) ))) console.log('Duplicate found at right index lookup, value: ', nums[j])
                return true;
            } 
            hashMap.set(nums[j], j.toString());
        }
        if (i < nums.length && verbose) console.log('incrementing left window size at current index: ', i, j, windowSize(i, j))
    }

    console.log('No duplicate found')
    return false;
};

let verbose = false;




console.log('1, expected true: ')
containsNearbyDuplicate([1,2,3,1], 3, verbose) // true
console.log('2, expected true: ')
containsNearbyDuplicate([1,0,1,1], 1, verbose) // true
console.log('3, expected false: ')
containsNearbyDuplicate([1,2,3,1,2,3], 2, verbose) // false
console.log('4, expected false: ')
containsNearbyDuplicate([1,2,3,1,2,1,3],1, verbose) // false
console.log('5, expected true: ')
containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,9], 3, verbose) // true
console.log('6, expected true: ')
containsNearbyDuplicate([1,2,2,3], 3, verbose) // true
console.log('7, expected true: ')
containsNearbyDuplicate([313,64,612,515,412,661,244,164,492,744,233,579,62,786,342,817,838,396,230,79,570,702,124,727,586,542,919,372,187,626,869,923,103,932,368,891,411,125,724,287,575,326,88,125,746,117,363,8,881,441,542,653,211,180,620,175,747,276,832,772,165,733,574,186,778,586,601,165,422,956,357,134,857,114,450,64,494,679,495,205,859,136,477,879,940,139,903,689,954,335,859,78,20], 22, verbose) // true
console.log('8, expected false: ')
containsNearbyDuplicate([13,23,1,2,3], 5, verbose) // false


