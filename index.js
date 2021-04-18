// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push('Ralph');
    return destructivelyAppendCat;
}

function destructivelyPrependCat(name) {
    cats.unshift('Bob');
    return destructivelyPrependCat;
}

function destructivelyRemoveLastCat() {
    cats.pop('Garfield');
    return destructivelyRemoveLastCat;
}

function destructivelyRemoveFirstCat() {
    cats.shift('Milo');
    return destructivelyRemoveFirstCat;
}


const appendCat = cats.slice();

appendCat.push('Broom');

