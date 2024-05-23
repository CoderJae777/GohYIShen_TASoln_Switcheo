//Provide 3 unique implementations of the following function in JavaScript.
// Input: n - any integer
// Output: return - summation to n, 
// i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.

// ###################################################################################################
// This function is written solely to fufill the output requirements

function for_output_print(n){
    var result = 0;
    for (var i=1; i<=n; i++){
        result = result + "+" + i;
    }
    return result;
}

//  ###################################################################################################
// Implementation #1: For loop

var sum_to_n_a = function(n) {
    console.log("Implementation #1: For loop with n = " + n);
    var result = for_output_print(n);
    var result_a = 0
    for (var i=1; i<=n; i++){
        result_a += i;
    }
    console.log("sum_to_n("+ n +") === " + result + " === " + result_a);
};

console.log("")
sum_to_n_a(5);
console.log("")
sum_to_n_a(10);
console.log("")

// ###################################################################################################
// Implementation #2: Sum to n formula

var sum_to_n_b = function(n) {
    console.log("Implementation #2: Sum to n formula with n = " + n);
    var result = for_output_print(n);
    var result_b = (n * (n+1)) / 2; 
    console.log("sum_to_n("+ n +") === " + result + " === " + result_b);
};

sum_to_n_b(5);
console.log("")
sum_to_n_b(10);
console.log("")

// ###################################################################################################
// Implementation #3: Recursion

function recursive_sum(n) {
    if (n <= 1){
        return 1;
    } 
    else {
       return n + recursive_sum(n-1);
    };
};

var sum_to_n_c = function(n){
    var result_c = 0;
    console.log("Implementation #3: Recursion with n = " + n);
    var result = for_output_print(n);
    result_c = recursive_sum(n)
    console.log("sum_to_n("+ n +") === " + result + " === " + result_c);
}
   
sum_to_n_c(1);
console.log("")
sum_to_n_c(5);
console.log("")
sum_to_n_c(10);
console.log("")
