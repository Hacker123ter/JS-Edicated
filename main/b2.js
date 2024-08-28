let a = 5;
function fun(a){
    if (a === 0) return 1;
    return a * fun(a - 1);
}
let as = fun(a);
console.log(as);