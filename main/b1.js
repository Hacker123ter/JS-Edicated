const chislo = 5;
function fuctorial(chislo){
    if (chislo === 0) return 1;
    return chislo * fuctorial(chislo - 1);
}
const vivod = fuctorial(chislo);
console.log(vivod);