let x = "Арбуз арбуз привеt! Арбуз , арбуз , пёрдни : Ой бля...";
function n(x){
    const slova = x.split(' ');
    let dlinii = '';
    for (let slovo of slova){
        if (slovo.length > dlinii.length){
            dlinii = slovo
        }
    }
    return dlinii;
}
let ZOV = n(x);
console.log(ZOV);