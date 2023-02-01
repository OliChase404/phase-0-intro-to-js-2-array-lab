
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    const copycats = [...cats, name]
  return copycats
}

function prependCat(name){
    const copycats2 = [name, ...cats]
    return copycats2
}

function removeLastCat(){
    const copycats3 = (cats.slice(0, cats.length -1))
    console.log(copycats3)
    return copycats3
}

function removeFirstCat(){
    const copycats4 = (cats.slice(1))
    console.log(copycats4)
    return copycats4
}

