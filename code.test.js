const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js') + '');

// Two identical graphs, isomorphic
let graph1 = [[1, 2], [0, 2], [0, 1]];
let graph2 = [[1, 2], [0, 2], [0, 1]];
assert(are_isomorphic(graph1, graph2) === true, "Test Case 1 Failed");

// Two non-idential graphs, isomorphic
let graph3 = [[1, 3], [0, 2], [1], [0]];
let graph4 = [[1, 2], [0, 3], [0], [1]];
assert(are_isomorphic(graph3, graph4) === true, "Test Case 2 Failed");

// Two graphs with same number of vertices but different connections, not isomorphic
let graph5 = [[1, 2], [0, 2], [0, 1]];
let graph6 = [[1], [0], [0]];
assert(are_isomorphic(graph5, graph6) === false, "Test Case 3 Failed");

// Graphs with different numbers of vertices, not isomorphic
let graph7 = [[1, 2], [0, 2], [0, 1]];
let graph8 = [[1], [0]];
assert(are_isomorphic(graph7, graph8) === false, "Test Case 4 Failed");

// Two graphs with different structures, not isomorphic
let graph9 = [[1, 2], [0, 3], [0, 3], [1, 2]];
let graph10 = [[1], [0], [3], [2]];
assert(are_isomorphic(graph9, graph10) === false, "Test Case 5 Failed");

// Empty graphs, isomorphic
let graph11 = [];
let graph12 = [];
assert(are_isomorphic(graph11, graph12) === true, "Test Case 6 Failed");

// Graph with a single vertex, isomorphic
let graph13 = [[0]];
let graph14 = [[0]];
assert(are_isomorphic(graph13, graph14) === true, "Test Case 7 Failed");

// Graphs where one is empty, not isomporphic
let graph15 = [[1, 2], [3, 4], [5, 6], [7, 8]];
let graph16 = [];
assert(are_isomorphic(graph15, graph16) === false, "Test Case 8 Failed")

console.log("All test cases passed");
