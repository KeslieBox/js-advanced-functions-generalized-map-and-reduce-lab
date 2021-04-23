// Add your functions here
function map(array, fn){
    let a = []
    for(let i = 0; i < array.length; i++) {
        a.push(fn(array[i]))
    }
    return a
}

function reduce(array, fn, start=0) {
    let accumulator = !!start ? start : array[0]
    let i = !!start ? 0 : 1

    for(; i < array.length; i++) {
        accumulator = fn(array[i], accumulator)
    }
    return accumulator
}

