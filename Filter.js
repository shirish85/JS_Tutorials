let number = [1,2,3,4]
function isEven(x){
    return x%2===0;
}
let output = number.filter(isEven)
console.log(output)