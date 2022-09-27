// TWO SUM:

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1] 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// MY ANSWER
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};


// VALID PARENTHESES:

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.


// MY ANSWER

const isValid = (input) => {
    // // Initialise an array to store the closing brackets expected
    let validString = [];
    
    // Looping through the characters in the string
    for (let i = 0; i < input.length; i++) {
        // Push the closing equivelant of any open brackets found
        if (input[i] == '(') {
            validString.push(')');
        } else if (input[i] == '{') {
            validString.push('}')
        } else if (input[i] == '[') {
            validString.push(']')
        } 
        
        // If a close bracket is found, check that it matches the last stored open bracket
        else if (validString.pop() !== input[i]) {
            return false
        }
        
        return true
    }
}