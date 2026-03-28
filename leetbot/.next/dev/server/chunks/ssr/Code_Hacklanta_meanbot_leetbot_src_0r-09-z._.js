module.exports = [
"[project]/Code/Hacklanta_meanbot/leetbot/src/data/problems.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getProblemBySlug",
    ()=>getProblemBySlug,
    "problems",
    ()=>problems
]);
const problems = [
    {
        slug: 'two-sum',
        title: 'Two Sum',
        difficulty: 'Easy',
        description: 'Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.',
        constraints: [
            '2 <= nums.length <= 10^4',
            '-10^9 <= nums[i] <= 10^9',
            '-10^9 <= target <= 10^9',
            'Only one valid answer exists.'
        ],
        examples: [
            {
                input: 'nums = [2,7,11,15], target = 9',
                output: '[0,1]',
                explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
            },
            {
                input: 'nums = [3,2,4], target = 6',
                output: '[1,2]'
            }
        ],
        starterCode: `def twoSum(nums, target):
    # Your solution here
    # Hint: there's a reason dicts exist
    pass`,
        optimalKeywords: [
            'Map',
            'new Map',
            'HashMap',
            'complement',
            'map.set',
            'map.get',
            'map.has'
        ],
        bruteForceSignals: [
            'for',
            'nested'
        ]
    },
    {
        slug: 'reverse-linked-list',
        title: 'Reverse Linked List',
        difficulty: 'Easy',
        description: 'Given the head of a singly linked list, reverse the list, and return the reversed list. This is a fundamental data structures problem that every competent engineer should be able to solve in their sleep.',
        constraints: [
            'The number of nodes in the list is the range [0, 5000].',
            '-5000 <= Node.val <= 5000'
        ],
        examples: [
            {
                input: 'head = [1,2,3,4,5]',
                output: '[5,4,3,2,1]'
            },
            {
                input: 'head = [1,2]',
                output: '[2,1]'
            }
        ],
        starterCode: `def reverseList(head):
    # Your solution here
    # Three pointer variables. That's all you need.
    # Unless you're going to use a list. Please don't.
    pass`,
        optimalKeywords: [
            'prev',
            'next',
            'null',
            'current',
            'curr',
            'iterative'
        ],
        bruteForceSignals: [
            'push',
            'reverse',
            'array',
            'Array',
            'vals',
            'values'
        ]
    },
    {
        slug: 'fizzbuzz',
        title: 'FizzBuzz',
        difficulty: 'Easy',
        description: 'Given an integer n, return a string array answer (1-indexed) where: answer[i] == "FizzBuzz" if i is divisible by 3 and 5, answer[i] == "Fizz" if i is divisible by 3, answer[i] == "Buzz" if i is divisible by 5, answer[i] == i (as a string) if none of the above conditions are true. This is reportedly the problem that filters out 50% of developer applicants.',
        constraints: [
            '1 <= n <= 10^4'
        ],
        examples: [
            {
                input: 'n = 3',
                output: '["1","2","Fizz"]'
            },
            {
                input: 'n = 15',
                output: '["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]'
            }
        ],
        starterCode: `def fizzBuzz(n):
    # Your solution here
    # It's modulo. Just use modulo.
    # If you write 15 if-statements I will find you.
    pass`,
        optimalKeywords: [
            '%',
            'modulo',
            'modulus',
            'mod'
        ],
        bruteForceSignals: [
            '== 0 && i == 0',
            'if (i == 3)',
            'if (i == 5)',
            'if (i == 15)'
        ]
    },
    {
        slug: 'valid-palindrome',
        title: 'Valid Palindrome',
        difficulty: 'Medium',
        description: 'A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Given a string s, return true if it is a palindrome, or false otherwise. Yes, this is technically a Medium. No, I don\'t care what you think about that.',
        constraints: [
            '1 <= s.length <= 2 * 10^5',
            's consists only of printable ASCII characters.'
        ],
        examples: [
            {
                input: 's = "A man, a plan, a canal: Panama"',
                output: 'true',
                explanation: '"amanaplanacanalpanama" is a palindrome.'
            },
            {
                input: 's = "race a car"',
                output: 'false',
                explanation: '"raceacar" is not a palindrome.'
            }
        ],
        starterCode: `def isPalindrome(s):
    # Your solution here
    # Two pointers. Left and right.
    # Do NOT just reverse the string. I'm watching.
    pass`,
        optimalKeywords: [
            'left',
            'right',
            'two pointer',
            'toLowerCase',
            'replace',
            'alphanumeric'
        ],
        bruteForceSignals: [
            "split('').reverse().join('')",
            'split("").reverse().join("")',
            '.reverse()',
            'reverse'
        ]
    },
    {
        slug: 'maximum-subarray',
        title: 'Maximum Subarray',
        difficulty: 'Medium',
        description: 'Given an integer array nums, find the subarray with the largest sum, and return its sum. This is Kadane\'s Algorithm. You will learn it today, or you will suffer.',
        constraints: [
            '1 <= nums.length <= 10^5',
            '-10^4 <= nums[i] <= 10^4'
        ],
        examples: [
            {
                input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]',
                output: '6',
                explanation: 'The subarray [4,-1,2,1] has the largest sum 6.'
            },
            {
                input: 'nums = [1]',
                output: '1'
            }
        ],
        starterCode: `def maxSubArray(nums):
    # Your solution here
    # One pass. That's all it takes.
    # If you use O(n²) I will find you.
    pass`,
        optimalKeywords: [
            'max',
            'current',
            'kadane',
            'max_sum',
            'cur_sum',
            'running'
        ],
        bruteForceSignals: [
            'for',
            'sum(nums'
        ]
    },
    {
        slug: 'contains-duplicate',
        title: 'Contains Duplicate',
        difficulty: 'Easy',
        description: 'Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct. This is a one-liner in Python. One. Line. If your solution is longer than 3 lines, please reconsider everything.',
        constraints: [
            '1 <= nums.length <= 10^5',
            '-10^9 <= nums[i] <= 10^9'
        ],
        examples: [
            {
                input: 'nums = [1,2,3,1]',
                output: 'true'
            },
            {
                input: 'nums = [1,2,3,4]',
                output: 'false'
            }
        ],
        starterCode: `def containsDuplicate(nums):
    # Your solution here
    # set(). That's the hint.
    # You're welcome. Don't waste it.
    pass`,
        optimalKeywords: [
            'set',
            'seen',
            'visited',
            'len(set'
        ],
        bruteForceSignals: [
            'for',
            'sort'
        ]
    },
    {
        slug: 'best-time-to-buy-stock',
        title: 'Best Time to Buy and Sell Stock',
        difficulty: 'Easy',
        description: 'You are given an array prices where prices[i] is the price of a given stock on the i-th day. You want to maximize your profit by choosing a single day to buy and a single day to sell. Return the maximum profit you can achieve. If you cannot achieve any profit, return 0.',
        constraints: [
            '1 <= prices.length <= 10^5',
            '0 <= prices[i] <= 10^4'
        ],
        examples: [
            {
                input: 'prices = [7,1,5,3,6,4]',
                output: '5',
                explanation: 'Buy on day 2 (price=1) and sell on day 5 (price=6). Profit = 6-1 = 5.'
            },
            {
                input: 'prices = [7,6,4,3,1]',
                output: '0',
                explanation: 'No profitable transaction is possible.'
            }
        ],
        starterCode: `def maxProfit(prices):
    # Your solution here
    # Track the minimum price and maximum profit.
    # One pass. Do NOT use nested loops. I'm begging you.
    pass`,
        optimalKeywords: [
            'min',
            'min_price',
            'max_profit',
            'profit',
            'minimum'
        ],
        bruteForceSignals: [
            'for',
            'range(len'
        ]
    },
    {
        slug: 'climbing-stairs',
        title: 'Climbing Stairs',
        difficulty: 'Easy',
        description: 'You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? Yes, this is just Fibonacci. Yes, you still have to figure that out yourself.',
        constraints: [
            '1 <= n <= 45'
        ],
        examples: [
            {
                input: 'n = 2',
                output: '2',
                explanation: '1+1 or 2.'
            },
            {
                input: 'n = 3',
                output: '3',
                explanation: '1+1+1, 1+2, or 2+1.'
            }
        ],
        starterCode: `def climbStairs(n):
    # Your solution here
    # It's Fibonacci. Don't overthink it.
    # And if you use recursion without memoization, God help you.
    pass`,
        optimalKeywords: [
            'dp',
            'fib',
            'prev',
            'a, b',
            'memo',
            'cache'
        ],
        bruteForceSignals: [
            'def climbStairs(n):\n    return climbStairs',
            'recursion'
        ]
    },
    {
        slug: 'longest-common-prefix',
        title: 'Longest Common Prefix',
        difficulty: 'Easy',
        description: 'Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "". This is as basic as it gets. If you cannot do this, please seek help.',
        constraints: [
            '1 <= strs.length <= 200',
            '0 <= strs[i].length <= 200',
            'strs[i] consists of only lowercase English letters.'
        ],
        examples: [
            {
                input: 'strs = ["flower","flow","flight"]',
                output: '"fl"'
            },
            {
                input: 'strs = ["dog","racecar","car"]',
                output: '""',
                explanation: 'There is no common prefix among the input strings.'
            }
        ],
        starterCode: `def longestCommonPrefix(strs):
    # Your solution here
    # Compare character by character.
    # This is not a hard problem. Please act like it.
    pass`,
        optimalKeywords: [
            'zip',
            'min',
            'prefix',
            'sorted',
            'enumerate'
        ],
        bruteForceSignals: [
            'for i in range',
            'while'
        ]
    }
];
function getProblemBySlug(slug) {
    return problems.find((p)=>p.slug === slug);
}
}),
"[project]/Code/Hacklanta_meanbot/leetbot/src/lib/evaluateCode.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "evaluateCode",
    ()=>evaluateCode
]);
function evaluateCode(code, problem) {
    const trimmed = code.trim();
    // Empty or unchanged starter code
    if (!trimmed || trimmed === problem.starterCode.trim()) {
        return 'wrong';
    }
    // Too short to be a real solution
    if (trimmed.split('\n').length < 3) {
        return 'wrong';
    }
    // No return statement — almost certainly wrong
    if (!trimmed.includes('return')) {
        return 'wrong';
    }
    // Nested loop detection — universal brute force signal
    const nestedLoopPattern = /for\s*[\w(][\s\S]{0,300}for\s*[\w(]/;
    const hasNestedLoops = nestedLoopPattern.test(trimmed);
    // Double while loops
    const doubleWhilePattern = /while\s*\([\s\S]{0,300}while\s*\(/;
    const hasDoubleWhile = doubleWhilePattern.test(trimmed);
    const isBruteForce = hasNestedLoops || hasDoubleWhile;
    // Check for problem-specific brute force signals
    const hasProblemBruteForce = problem.bruteForceSignals.some((signal)=>trimmed.includes(signal));
    // Check for optimal solution keywords
    const hasOptimalSignal = problem.optimalKeywords.some((kw)=>trimmed.toLowerCase().includes(kw.toLowerCase()));
    // If code is brute force (nested loops), that's suboptimal — TLE roasts efficiency
    if (isBruteForce || hasProblemBruteForce) {
        return 'suboptimal';
    }
    // Optimal: has optimal keywords, no brute force
    if (hasOptimalSignal) {
        return 'correct';
    }
    // Fallback: code looks wrong (no recognizable patterns)
    return 'wrong';
}
}),
"[project]/Code/Hacklanta_meanbot/leetbot/src/components/DifficultyBadge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DifficultyBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Hacklanta_meanbot/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const styles = {
    Easy: 'text-green-400 bg-green-400/10 border border-green-400/20',
    Medium: 'text-yellow-400 bg-yellow-400/10 border border-yellow-400/20',
    Hard: 'text-red-400 bg-red-400/10 border border-red-400/20'
};
function DifficultyBadge({ difficulty }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `text-xs font-semibold px-2 py-0.5 rounded-full ${styles[difficulty]}`,
        children: difficulty
    }, void 0, false, {
        fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/DifficultyBadge.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/Code/Hacklanta_meanbot/leetbot/src/components/ProblemDescription.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProblemDescription
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Hacklanta_meanbot/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$leetbot$2f$src$2f$components$2f$DifficultyBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Hacklanta_meanbot/leetbot/src/components/DifficultyBadge.tsx [app-ssr] (ecmascript)");
;
;
function ProblemDescription({ problem }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full overflow-y-auto bg-gray-950 p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-lg font-semibold text-gray-100",
                        children: problem.title
                    }, void 0, false, {
                        fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/ProblemDescription.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$leetbot$2f$src$2f$components$2f$DifficultyBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        difficulty: problem.difficulty
                    }, void 0, false, {
                        fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/ProblemDescription.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/ProblemDescription.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-300 text-sm leading-relaxed mb-6 whitespace-pre-wrap",
                children: problem.description
            }, void 0, false, {
                fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/ProblemDescription.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: problem.examples.map((ex, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-300 text-sm font-semibold mb-2",
                                children: [
                                    "Example ",
                                    i + 1,
                                    ":"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/ProblemDescription.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-900 border border-gray-700 rounded-md p-3 text-sm font-mono",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-400",
                                                children: "Input: "
                                            }, void 0, false, {
                                                fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/ProblemDescription.tsx",
                                                lineNumber: 29,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-200",
                                                children: ex.input
                                            }, void 0, false, {
                                                fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/ProblemDescription.tsx",
                                                lineNumber: 30,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/ProblemDescription.tsx",
                                        lineNumber: 28,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-400",
                                                children: "Output: "
                                            }, void 0, false, {
                                                fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/ProblemDescription.tsx",
                                                lineNumber: 33,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-green-400",
                                                children: ex.output
                                            }, void 0, false, {
                                                fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/ProblemDescription.tsx",
                                                lineNumber: 34,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/ProblemDescription.tsx",
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, this),
                                    ex.explanation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 text-gray-500 text-xs italic",
                                        children: [
                                            "Explanation: ",
                                            ex.explanation
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/ProblemDescription.tsx",
                                        lineNumber: 37,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/ProblemDescription.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/ProblemDescription.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/ProblemDescription.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-300 text-sm font-semibold mb-2",
                        children: "Constraints:"
                    }, void 0, false, {
                        fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/ProblemDescription.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-1",
                        children: problem.constraints.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "text-gray-400 text-sm flex items-start gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-green-500 mt-0.5",
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/ProblemDescription.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        className: "font-mono text-xs bg-gray-800 px-1 py-0.5 rounded",
                                        children: c
                                    }, void 0, false, {
                                        fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/ProblemDescription.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/ProblemDescription.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/ProblemDescription.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/ProblemDescription.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/ProblemDescription.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/Code/Hacklanta_meanbot/leetbot/src/components/CodeEditor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CodeEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Hacklanta_meanbot/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Hacklanta_meanbot/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
;
'use client';
;
;
const MonacoEditor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/Code/Hacklanta_meanbot/node_modules/@monaco-editor/react/dist/index.mjs [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full bg-gray-900 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-gray-500 text-sm font-mono animate-pulse",
                children: "Loading editor..."
            }, void 0, false, {
                fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/CodeEditor.tsx",
                lineNumber: 11,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/CodeEditor.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
});
function CodeEditor({ code, onChange, language = 'python' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full monaco-container",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MonacoEditor, {
            height: "100%",
            language: language,
            theme: "vs-dark",
            value: code,
            onChange: (val)=>onChange(val ?? ''),
            options: {
                fontSize: 14,
                minimap: {
                    enabled: false
                },
                scrollBeyondLastLine: false,
                wordWrap: 'on',
                lineNumbers: 'on',
                renderLineHighlight: 'all',
                padding: {
                    top: 16
                },
                fontFamily: 'var(--font-geist-mono), "Courier New", monospace',
                tabSize: 2
            }
        }, void 0, false, {
            fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/CodeEditor.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/CodeEditor.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/Code/Hacklanta_meanbot/leetbot/src/components/TLEConsole.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TLEConsole
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Hacklanta_meanbot/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Hacklanta_meanbot/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function TLEConsole({ message, isLoading, isFinalRoast = false }) {
    const endRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        endRef.current?.scrollIntoView({
            behavior: 'smooth'
        });
    }, [
        message,
        isLoading
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col bg-black border-t border-gray-700",
        style: {
            height: '280px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 px-4 py-2 bg-gray-900 border-b border-gray-700 shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-green-400 text-xs font-bold font-mono",
                        children: "Leetbot"
                    }, void 0, false, {
                        fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/TLEConsole.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-500 text-xs font-mono",
                        children: "// Console"
                    }, void 0, false, {
                        fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/TLEConsole.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-auto inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/TLEConsole.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/TLEConsole.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-4 font-mono text-sm",
                children: [
                    isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-yellow-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "animate-spin",
                                children: "⟳"
                            }, void 0, false, {
                                fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/TLEConsole.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "animate-pulse",
                                children: "Analyzing your disaster..."
                            }, void 0, false, {
                                fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/TLEConsole.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/TLEConsole.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this) : message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `leading-relaxed ${isFinalRoast ? 'text-red-400' : 'text-gray-300'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `${isFinalRoast ? 'text-red-500' : 'text-green-400'} font-bold`,
                                children: [
                                    "Leetbot >",
                                    ' '
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/TLEConsole.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this),
                            message
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/TLEConsole.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-green-700",
                                children: "> "
                            }, void 0, false, {
                                fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/TLEConsole.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            "Waiting for your next mistake...",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block w-2 h-4 bg-gray-600 ml-1 animate-pulse align-middle"
                            }, void 0, false, {
                                fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/TLEConsole.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/TLEConsole.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: endRef
                    }, void 0, false, {
                        fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/TLEConsole.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/TLEConsole.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/TLEConsole.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/Code/Hacklanta_meanbot/leetbot/src/components/PaywallModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PaywallModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Hacklanta_meanbot/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function PaywallModal({ onSkip }) {
    const handleFakePay = ()=>{
        alert("Transaction failed. Even your credit card rejected you.\n\nError code: SKILL_ISSUE_404");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-900 border border-yellow-500/60 rounded-xl max-w-md w-full p-6 shadow-2xl shadow-yellow-500/10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-4xl mb-2",
                            children: "💰"
                        }, void 0, false, {
                            fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/PaywallModal.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-yellow-400 font-bold text-xl mb-1 tracking-tight",
                            children: "10x PREMIUM MENTORSHIP TIER"
                        }, void 0, false, {
                            fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/PaywallModal.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-sm",
                            children: "Leetbot has reviewed enough of your suffering for free."
                        }, void 0, false, {
                            fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/PaywallModal.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/PaywallModal.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-gray-500 text-sm",
                            children: [
                                "Regular price: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "line-through",
                                    children: "$50"
                                }, void 0, false, {
                                    fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/PaywallModal.tsx",
                                    lineNumber: 29,
                                    columnNumber: 65
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/PaywallModal.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-yellow-400 text-4xl font-black",
                            children: "$500"
                        }, void 0, false, {
                            fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/PaywallModal.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-gray-500 text-sm",
                            children: "/ month · special rate for especially bad coders"
                        }, void 0, false, {
                            fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/PaywallModal.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/PaywallModal.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-2 mb-6 text-sm",
                    children: [
                        'Personalized insults tailored to your specific algorithmic failures',
                        'Access to my exclusive Big-O complexity shame spreadsheet',
                        'I will personally email your CS professor',
                        'Early access to the list of careers you\'re better suited for',
                        'Unlimited roasts (you clearly need them)',
                        'Certificate of participation (not achievement)'
                    ].map((benefit, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start gap-2 text-gray-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-yellow-500 shrink-0 mt-0.5",
                                    children: "✓"
                                }, void 0, false, {
                                    fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/PaywallModal.tsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, this),
                                benefit
                            ]
                        }, i, true, {
                            fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/PaywallModal.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/PaywallModal.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleFakePay,
                            className: "w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-lg transition-colors text-sm",
                            children: "Pay Here — Unlock My Potential"
                        }, void 0, false, {
                            fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/PaywallModal.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onSkip,
                            className: "w-full text-gray-500 hover:text-gray-300 py-2 text-sm transition-colors underline underline-offset-2",
                            children: "I'm broke 💸 (can't even afford $500, lmao)"
                        }, void 0, false, {
                            fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/PaywallModal.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/PaywallModal.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-700 text-xs text-center mt-4",
                    children: "*No refunds. No mercy. No O(1) solutions will be provided."
                }, void 0, false, {
                    fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/PaywallModal.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/PaywallModal.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/components/PaywallModal.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/Code/Hacklanta_meanbot/leetbot/src/app/problems/[slug]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorkspacePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Hacklanta_meanbot/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Hacklanta_meanbot/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Hacklanta_meanbot/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$leetbot$2f$src$2f$data$2f$problems$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Hacklanta_meanbot/leetbot/src/data/problems.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$leetbot$2f$src$2f$lib$2f$evaluateCode$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Hacklanta_meanbot/leetbot/src/lib/evaluateCode.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$leetbot$2f$src$2f$components$2f$ProblemDescription$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Hacklanta_meanbot/leetbot/src/components/ProblemDescription.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$leetbot$2f$src$2f$components$2f$CodeEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Hacklanta_meanbot/leetbot/src/components/CodeEditor.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$leetbot$2f$src$2f$components$2f$TLEConsole$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Hacklanta_meanbot/leetbot/src/components/TLEConsole.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$leetbot$2f$src$2f$components$2f$PaywallModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Hacklanta_meanbot/leetbot/src/components/PaywallModal.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function WorkspacePage({ params }) {
    const { slug } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(params);
    const problem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$leetbot$2f$src$2f$data$2f$problems$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProblemBySlug"])(slug);
    const [code, setCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(problem?.starterCode ?? '');
    const [submissionCount, setSubmissionCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [roastMessage, setRoastMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPaywall, setShowPaywall] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitDisabled, setSubmitDisabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFinalRoast, setIsFinalRoast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!problem) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-950 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 text-lg mb-2",
                        children: "Problem not found."
                    }, void 0, false, {
                        fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/app/problems/[slug]/page.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 text-sm mb-6",
                        children: "Even Leetbot refuses to review a problem that doesn't exist."
                    }, void 0, false, {
                        fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/app/problems/[slug]/page.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "text-green-400 hover:underline text-sm",
                        children: "← Back to Problems"
                    }, void 0, false, {
                        fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/app/problems/[slug]/page.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/app/problems/[slug]/page.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/app/problems/[slug]/page.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this);
    }
    async function callRoastAPI(trigger, count) {
        setIsLoading(true);
        setRoastMessage(null);
        try {
            const res = await fetch('/api/roast', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    problemSlug: problem.slug,
                    code,
                    trigger,
                    submissionCount: count
                })
            });
            const data = await res.json();
            setRoastMessage(data.message);
        } catch  {
            setRoastMessage("My servers are as overwhelmed by your code as I am. Try again.");
        } finally{
            setIsLoading(false);
        }
    }
    async function handleSubmit() {
        if (submitDisabled || isLoading) return;
        const newCount = submissionCount + 1;
        setSubmissionCount(newCount);
        // Trigger paywall on 3rd submission
        if (newCount >= 3) {
            setShowPaywall(true);
            return;
        }
        const trigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$leetbot$2f$src$2f$lib$2f$evaluateCode$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluateCode"])(code, problem);
        await callRoastAPI(trigger, newCount);
    }
    async function handlePaywallSkip() {
        setShowPaywall(false);
        setIsFinalRoast(true);
        setSubmitDisabled(true);
        await callRoastAPI('paywall', submissionCount);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen flex flex-col bg-gray-950 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "border-b border-gray-800 bg-gray-950 shrink-0 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 h-12 flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "text-green-400 font-bold text-base tracking-tight hover:text-green-300 transition-colors",
                            children: "LeetBot"
                        }, void 0, false, {
                            fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/app/problems/[slug]/page.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-600",
                            children: "/"
                        }, void 0, false, {
                            fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/app/problems/[slug]/page.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-300 text-sm",
                            children: problem.title
                        }, void 0, false, {
                            fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/app/problems/[slug]/page.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ml-auto flex items-center gap-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-500 text-xs hidden sm:block",
                                children: [
                                    "Submissions: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `font-mono font-bold ${submissionCount >= 2 ? 'text-red-400' : 'text-gray-300'}`,
                                        children: [
                                            submissionCount,
                                            "/3"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/app/problems/[slug]/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/app/problems/[slug]/page.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/app/problems/[slug]/page.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/app/problems/[slug]/page.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/app/problems/[slug]/page.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 grid grid-cols-2 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-r border-gray-800 overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$leetbot$2f$src$2f$components$2f$ProblemDescription$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            problem: problem
                        }, void 0, false, {
                            fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/app/problems/[slug]/page.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/app/problems/[slug]/page.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between px-4 py-2 bg-gray-900 border-b border-gray-800 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-400 text-xs font-mono",
                                        children: "solution.py"
                                    }, void 0, false, {
                                        fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/app/problems/[slug]/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSubmit,
                                        disabled: submitDisabled || isLoading,
                                        className: `
                px-4 py-1.5 rounded text-sm font-semibold transition-all
                ${submitDisabled ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : isLoading ? 'bg-green-800 text-green-300 cursor-wait animate-pulse' : 'bg-green-600 hover:bg-green-500 text-white cursor-pointer active:scale-95'}
              `,
                                        children: submitDisabled ? 'Banned from Leetbot Premium' : isLoading ? 'Submitting...' : 'Submit Solution'
                                    }, void 0, false, {
                                        fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/app/problems/[slug]/page.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/app/problems/[slug]/page.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$leetbot$2f$src$2f$components$2f$CodeEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    code: code,
                                    onChange: setCode
                                }, void 0, false, {
                                    fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/app/problems/[slug]/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/app/problems/[slug]/page.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$leetbot$2f$src$2f$components$2f$TLEConsole$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                message: roastMessage,
                                isLoading: isLoading,
                                isFinalRoast: isFinalRoast
                            }, void 0, false, {
                                fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/app/problems/[slug]/page.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/app/problems/[slug]/page.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/app/problems/[slug]/page.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            showPaywall && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Hacklanta_meanbot$2f$leetbot$2f$src$2f$components$2f$PaywallModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onSkip: handlePaywallSkip
            }, void 0, false, {
                fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/app/problems/[slug]/page.tsx",
                lineNumber: 155,
                columnNumber: 23
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Code/Hacklanta_meanbot/leetbot/src/app/problems/[slug]/page.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Code_Hacklanta_meanbot_leetbot_src_0r-09-z._.js.map