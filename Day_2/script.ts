import {syncReadFile} from '../Utils/functions'


/**
 * A for Rock
 * B for Paper
 * C for Scissors
 *
 *  X for Rock
 *  Y for Paper
 *  Z for Scissors
 **************************
 *
 *  TABLE
 *****************
 * - * A * B * C *
 * X * D * L * W *
 * Y * W * D * L *
 * Z * L * W * D *
 *****************
 *
 */



const allRounds = syncReadFile('input').split('\n')

/**
 * Part 1
 */
const strategyGuide = new Map<string, number>([
    ['A X', 3],
    ['A Y', 6],
    ['A Z', 0],
    ['B X', 0],
    ['B Y', 3],
    ['B Z', 6],
    ['C X', 6],
    ['C Y', 0],
    ['C Z', 3],
]);

const myChoiceValues = new Map<string, number>([
    ['X', 1],
    ['Y', 2],
    ['Z', 3],
]);

let result = 0;

allRounds.map(round => {
    result += strategyGuide.get(round) ?? 0
    result += myChoiceValues.get(round.slice(2)) ?? 0
})

console.log(result)

/**
 * Part 2
 */

const pointsPerResult = new Map<string, number>([
    ['A X', 0],
    ['A Y', 3],
    ['A Z', 6],
    ['B X', 0],
    ['B Y', 3],
    ['B Z', 6],
    ['C X', 0],
    ['C Y', 3],
    ['C Z', 6],
]);

const choices = new Map<string, string>([
    ['A X', 'Z'],
    ['A Y', 'X'],
    ['A Z', 'Y'],
    ['B X', 'X'],
    ['B Y', 'Y'],
    ['B Z', 'Z'],
    ['C X', 'Y'],
    ['C Y', 'Z'],
    ['C Z', 'X'],
]);


let result1 = 0


allRounds.map(round => {
    result1 += pointsPerResult.get(round) ?? 0

    const choiceMaked = choices.get(round);
    if (choiceMaked) {
        result1 += myChoiceValues.get(choiceMaked) ?? 0
    }
})


console.log(result1)