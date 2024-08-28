let x = "Hello World! Классно, весело, ура!";
function x1(x){
    const chislo = {};
    for (let kolvo of x){
        chislo[kolvo] = (chislo[kolvo] || 0) + 1;
    }
    return chislo;
}
const z = x1(x);
function o(z){
    let res = '';
    for (let key in z) {
        res += `${key}: ${z[key]}, `
    }
    return res.slice(0, -2);
}
const a = o(z);
console.log(a);