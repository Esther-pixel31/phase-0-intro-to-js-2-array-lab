// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
   console.log(cats.push("Ralph"));
}

function destructivelyPrependCat(){
    console.log(cats.unshift("Bob"));
}

function destructivelyRemoveLastCat(){
    console.log(cats.pop(4));
}

function destructivelyRemoveFirstCat(){
    console.log(cats.shift(0));
}

function appendCat(name){
    return [...cats, name];
}

function prependCat(name) {
    return [name, ...cats]; // ✅ Adds `name` at the beginning without modifying `cats`
}

function removeLastCat(){
    return cats.slice(0, -1);
}

function removeFirstCat() {
    return cats.slice(1); // ✅ Returns a new array without the first element
}