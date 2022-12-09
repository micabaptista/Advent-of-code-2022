import {syncReadFile} from '../Utils/functions'


const allPairs = syncReadFile('input')
    .split('\n')
    .map(value => value.split(','));


function range(j: number, k: number) {
    return Array
        .apply(null, Array((k - j) + 1))
        .map(function (_, n) {
            return n + j;
        });
}

let containsAll = (arr: number[], target: number[]) => target.every(v => arr.includes(v));

const containsAny = (arr: number[], target: number[]) => arr.some(r => target.indexOf(r) >= 0)

let count = 0;

allPairs.map(value => {
    let firstPairRange = range(Number(value[0].split("-")[0]), Number(value[0].split("-")[1]))
    let secondPairRange = range(Number(value[1].split("-")[0]), Number(value[1].split("-")[1]))

    if (containsAll(firstPairRange, secondPairRange) ||
        containsAll(secondPairRange, firstPairRange) ||
        containsAny(firstPairRange, secondPairRange) ||
        containsAny(secondPairRange, firstPairRange)
    ) {
        count += 1;
    }
})

console.log(count)
