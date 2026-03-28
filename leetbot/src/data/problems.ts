import { Problem } from '@/types';

export const problems: Problem[] = [
  {
    slug: 'two-sum',
    title: 'Two Sum',
    difficulty: 'Easy',
    description:
      'Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.',
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '-10^9 <= target <= 10^9',
      'Only one valid answer exists.',
    ],
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]',
      },
    ],
    starterCode: `def twoSum(nums, target):
    # Your solution here
    # Hint: there's a reason dicts exist
    pass`,
    optimalKeywords: ['Map', 'new Map', 'HashMap', 'complement', 'map.set', 'map.get', 'map.has'],
    bruteForceSignals: ['for', 'nested'],
  },
  {
    slug: 'reverse-linked-list',
    title: 'Reverse Linked List',
    difficulty: 'Easy',
    description:
      'Given the head of a singly linked list, reverse the list, and return the reversed list. This is a fundamental data structures problem that every competent engineer should be able to solve in their sleep.',
    constraints: [
      'The number of nodes in the list is the range [0, 5000].',
      '-5000 <= Node.val <= 5000',
    ],
    examples: [
      {
        input: 'head = [1,2,3,4,5]',
        output: '[5,4,3,2,1]',
      },
      {
        input: 'head = [1,2]',
        output: '[2,1]',
      },
    ],
    starterCode: `def reverseList(head):
    # Your solution here
    # Three pointer variables. That's all you need.
    # Unless you're going to use a list. Please don't.
    pass`,
    optimalKeywords: ['prev', 'next', 'null', 'current', 'curr', 'iterative'],
    bruteForceSignals: ['push', 'reverse', 'array', 'Array', 'vals', 'values'],
  },
  {
    slug: 'fizzbuzz',
    title: 'FizzBuzz',
    difficulty: 'Easy',
    description:
      'Given an integer n, return a string array answer (1-indexed) where: answer[i] == "FizzBuzz" if i is divisible by 3 and 5, answer[i] == "Fizz" if i is divisible by 3, answer[i] == "Buzz" if i is divisible by 5, answer[i] == i (as a string) if none of the above conditions are true. This is reportedly the problem that filters out 50% of developer applicants.',
    constraints: ['1 <= n <= 10^4'],
    examples: [
      {
        input: 'n = 3',
        output: '["1","2","Fizz"]',
      },
      {
        input: 'n = 15',
        output: '["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]',
      },
    ],
    starterCode: `def fizzBuzz(n):
    # Your solution here
    # It's modulo. Just use modulo.
    # If you write 15 if-statements I will find you.
    pass`,
    optimalKeywords: ['%', 'modulo', 'modulus', 'mod'],
    bruteForceSignals: ['== 0 && i == 0', 'if (i == 3)', 'if (i == 5)', 'if (i == 15)'],
  },
  {
    slug: 'valid-palindrome',
    title: 'Valid Palindrome',
    difficulty: 'Medium',
    description:
      'A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Given a string s, return true if it is a palindrome, or false otherwise. Yes, this is technically a Medium. No, I don\'t care what you think about that.',
    constraints: [
      '1 <= s.length <= 2 * 10^5',
      's consists only of printable ASCII characters.',
    ],
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: 'true',
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: 'false',
        explanation: '"raceacar" is not a palindrome.',
      },
    ],
    starterCode: `def isPalindrome(s):
    # Your solution here
    # Two pointers. Left and right.
    # Do NOT just reverse the string. I'm watching.
    pass`,
    optimalKeywords: ['left', 'right', 'two pointer', 'toLowerCase', 'replace', 'alphanumeric'],
    bruteForceSignals: ["split('').reverse().join('')", 'split("").reverse().join("")', '.reverse()', 'reverse'],
  },
  {
    slug: 'maximum-subarray',
    title: 'Maximum Subarray',
    difficulty: 'Medium',
    description:
      'Given an integer array nums, find the subarray with the largest sum, and return its sum. This is Kadane\'s Algorithm. You will learn it today, or you will suffer.',
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^4 <= nums[i] <= 10^4',
    ],
    examples: [
      {
        input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]',
        output: '6',
        explanation: 'The subarray [4,-1,2,1] has the largest sum 6.',
      },
      {
        input: 'nums = [1]',
        output: '1',
      },
    ],
    starterCode: `def maxSubArray(nums):
    # Your solution here
    # One pass. That's all it takes.
    # If you use O(n²) I will find you.
    pass`,
    optimalKeywords: ['max', 'current', 'kadane', 'max_sum', 'cur_sum', 'running'],
    bruteForceSignals: ['for', 'sum(nums'],
  },
  {
    slug: 'contains-duplicate',
    title: 'Contains Duplicate',
    difficulty: 'Easy',
    description:
      'Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct. This is a one-liner in Python. One. Line. If your solution is longer than 3 lines, please reconsider everything.',
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^9 <= nums[i] <= 10^9',
    ],
    examples: [
      {
        input: 'nums = [1,2,3,1]',
        output: 'true',
      },
      {
        input: 'nums = [1,2,3,4]',
        output: 'false',
      },
    ],
    starterCode: `def containsDuplicate(nums):
    # Your solution here
    # set(). That's the hint.
    # You're welcome. Don't waste it.
    pass`,
    optimalKeywords: ['set', 'seen', 'visited', 'len(set'],
    bruteForceSignals: ['for', 'sort'],
  },
  {
    slug: 'best-time-to-buy-stock',
    title: 'Best Time to Buy and Sell Stock',
    difficulty: 'Easy',
    description:
      'You are given an array prices where prices[i] is the price of a given stock on the i-th day. You want to maximize your profit by choosing a single day to buy and a single day to sell. Return the maximum profit you can achieve. If you cannot achieve any profit, return 0.',
    constraints: [
      '1 <= prices.length <= 10^5',
      '0 <= prices[i] <= 10^4',
    ],
    examples: [
      {
        input: 'prices = [7,1,5,3,6,4]',
        output: '5',
        explanation: 'Buy on day 2 (price=1) and sell on day 5 (price=6). Profit = 6-1 = 5.',
      },
      {
        input: 'prices = [7,6,4,3,1]',
        output: '0',
        explanation: 'No profitable transaction is possible.',
      },
    ],
    starterCode: `def maxProfit(prices):
    # Your solution here
    # Track the minimum price and maximum profit.
    # One pass. Do NOT use nested loops. I'm begging you.
    pass`,
    optimalKeywords: ['min', 'min_price', 'max_profit', 'profit', 'minimum'],
    bruteForceSignals: ['for', 'range(len'],
  },
  {
    slug: 'climbing-stairs',
    title: 'Climbing Stairs',
    difficulty: 'Easy',
    description:
      'You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? Yes, this is just Fibonacci. Yes, you still have to figure that out yourself.',
    constraints: ['1 <= n <= 45'],
    examples: [
      {
        input: 'n = 2',
        output: '2',
        explanation: '1+1 or 2.',
      },
      {
        input: 'n = 3',
        output: '3',
        explanation: '1+1+1, 1+2, or 2+1.',
      },
    ],
    starterCode: `def climbStairs(n):
    # Your solution here
    # It's Fibonacci. Don't overthink it.
    # And if you use recursion without memoization, God help you.
    pass`,
    optimalKeywords: ['dp', 'fib', 'prev', 'a, b', 'memo', 'cache'],
    bruteForceSignals: ['def climbStairs(n):\n    return climbStairs', 'recursion'],
  },
  {
    slug: 'longest-common-prefix',
    title: 'Longest Common Prefix',
    difficulty: 'Easy',
    description:
      'Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "". This is as basic as it gets. If you cannot do this, please seek help.',
    constraints: [
      '1 <= strs.length <= 200',
      '0 <= strs[i].length <= 200',
      'strs[i] consists of only lowercase English letters.',
    ],
    examples: [
      {
        input: 'strs = ["flower","flow","flight"]',
        output: '"fl"',
      },
      {
        input: 'strs = ["dog","racecar","car"]',
        output: '""',
        explanation: 'There is no common prefix among the input strings.',
      },
    ],
    starterCode: `def longestCommonPrefix(strs):
    # Your solution here
    # Compare character by character.
    # This is not a hard problem. Please act like it.
    pass`,
    optimalKeywords: ['zip', 'min', 'prefix', 'sorted', 'enumerate'],
    bruteForceSignals: ['for i in range', 'while'],
  },
];

export function getProblemBySlug(slug: string): Problem | undefined {
  return problems.find((p) => p.slug === slug);
}
