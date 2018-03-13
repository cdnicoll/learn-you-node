// Read input, 0 index is always node, 1 index is always path to .js, 2 index are the args
//  - Validate they are numbers
//  - Add the sum of the numbers
// Print out the sum

var i = 2;
var sum = 0;

while(process.argv[i]) {
    sum += Number(process.argv[i]);
    i++;
}

console.log(sum);
