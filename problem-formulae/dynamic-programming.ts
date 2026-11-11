

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





// Problem: Return Pascals triangle for numRows
// Structure: Dynamic
// Plan: build table, bottom up approach to save time
    // 1 = [1]
    // 2 = [1,1] (build the rest: pascTri[numRows] = pascTri[numRows] + pascTri[numRows-1])
// Edge Cases:
function generate(numRows: number): number[][] {
    let pTriangle: number[][] = [];

    pTriangle[0] = [1];
    if (numRows > 1) {
        pTriangle[1] = [1,1];
    }

    for (let i = 2; i < numRows; i++){
        let newRow: number[] = [1];
        for (let j = 1; j < pTriangle[i-1].length; j++){
            // iterate through elements in previous row
            newRow.push(pTriangle[i-1][j] + pTriangle[i-1][j-1]);
        }
        newRow.push(1);
        pTriangle[i] = newRow;
    }
    return pTriangle;
};

// Returns row of Pascal's Triangle
function getRow(rowIndex: number): number[] {
    let pTriangle: number[][] = [];
    pTriangle[0] = [1];
    if (rowIndex >= 1) {
        pTriangle[1] = [1,1];
    }

    for (let i = 2; i <= rowIndex; i++){
        let newRow: number[] = [1];
        for (let j = 1; j < pTriangle[i-1].length; j++){
            // iterate through elements in previous row
            newRow.push(pTriangle[i-1][j] + pTriangle[i-1][j-1]);
        }
        newRow.push(1);
        pTriangle[i] = newRow;
    }
    return pTriangle[rowIndex];
};





// Problem: 
    // Given an array of prices per ith day, return the maximum profit by 
    // returning the difference between the lowest and highest price in the array. 
    // You can only buy and sell once (sequentially).
// Structure: Dynamic Programming
// Plan:
     // brute: compute the differences every pair of element
    // instinct:  
        // Just compare the profits of each day with the minimum price seen so far.
        // if the price is lower than our global min price (so far), set min price to that new one
        // otherwise calculate profit, if greater than global profit, update max profit
// Edge Cases:
    // Array length can be 1 

function maxProfit(prices: number[]): number {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (const price of prices) {
        if (price < minPrice) {
            minPrice = price;            // new cheapest buy seen so far
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice; // best sell at current day
        }
    }

    return maxProfit;
}





// Problem:
// Structure:
// Plan:
// Edge Cases:





















let prev2 = 1;
    let prev1 = 2;
    let current;

    for (let i = 3; i <= n; i++) {
        current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }

    return current;