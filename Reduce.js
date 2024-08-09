let number = [1,2,3,4]
let sum = number.reduce(function(result,item){
    return result + item
},0);
console.log(sum)