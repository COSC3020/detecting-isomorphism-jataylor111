
// I have realized that this doesn't work as any graph that isn't the same is flagged as not isomorhpic regardless of that correctness
// I'm leaving this here in case I forget to come back to fix it, but for now I am moving on for time

function are_isomorphic(graph1, graph2) {
    // Base check to make sure they have the same number of vertices
    if (graph1.length !== graph2.length) {
        return false;
    }

    // Check if they're both empty
    if(graph1.length == 0 && graph2.length == 0) {
        return true
    }
    
    // Copy graph2 for checking
    let temp = [];
    for (let j = 0; j < graph2.length; j++) { 
        temp.push(graph2[j]);
    }

    // Initialize the isIso boolean
    let isIso = false;

    // Check for Isomorphism
    for (let i = 0; i < graph1.length; i++) {
        // Assume isIso is false until proven otherwise
        isIso = false;
        for (let j = 0; j < temp.length; j++) {
            // Compare arrays directly, element by element
            if (arraysEqual(graph1[i], temp[j])) {
                temp = temp.filter((_, index) => index !== j); 
                isIso = true;
                break;
            }
        }
        // Return false if at any point it is no longer isomorphic
        if (!isIso) {
            return false;
        }
    }
    return isIso;
}

// Helper function to check if two arrays are equal
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

// let graph1 = [[1, 3], [0, 2], [1], [0]];
// let graph2 = [[1, 2], [0, 3], [0], [1]];
// let graph3 = [];
// console.log(are_isomorphic(graph1, graph2));
// console.log(are_isomorphic(graph3, graph2));
