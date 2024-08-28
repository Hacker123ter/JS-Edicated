const asd = 6;
function fun(asd){
    if (asd === 0) return 1;
    return asd * fun(asd - 1);
}
const arbuz = fun(asd);
console.log(arbuz);