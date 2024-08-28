const x = 3;
function fun(x){
    if (x === 0) return 1;
    return x * fun(x - 1);
}
const a = fun(x);
console.log(a);