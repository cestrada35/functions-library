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
