let asd = 4;
function as(asd){
    if (asd === 0) return 1;
    return asd * as(asd - 1);
}
let arbuz = as(asd);
console.log(arbuz);