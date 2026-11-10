

// Prob: Given n amount of steps to reach the top, return:
    // how many distinct ways can you climb to the top if you can either take 1 or 2 steps at a time? 
    // Each step can be taken in either 1 or 2 increments.
// Structure: Dynamic Programming
// plan:
    // Use bottom-up approach to build a solution iteratively using memoization or tabulation.
    // if n is 1, return 1 (base case)
    // if n is 2, return 2 (base case)
    // for n > 2, build a table to store values up until n
// outliers:
// n is 1
function climbStairs(n: number): number {
    // if (n === 1) return 1;
    // if (n === 2) return 2;
    // let total = 0;
    // total = climbStairs(n - 1) + climbStairs(n - 2); // Too slow for large n
    let table: number[] = new Array(n + 1).fill(0);
    table[1] = 1;
    table[2] = 2;
    for (let i = 3; i <= n; i++) {
        table[i] = table[i-1] + table[i-2];
    }
    return table[n];
};




























let prev2 = 1;
    let prev1 = 2;
    let current;

    for (let i = 3; i <= n; i++) {
        current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }

    return current;