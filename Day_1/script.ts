import {syncReadFile} from '../Utils/functions'


const entriesPerElf = syncReadFile('input')
    .split('\n\n')
    .map((caloriesByElfStr: string) => caloriesByElfStr
        .split('\n')
        .map(Number)) as Array<number[]>


const totalCaloriesPerElf = entriesPerElf.map(currentElfEntries => {
    return currentElfEntries.reduce<number>((sum, calories) => {
        return sum + calories
    }, 0)
}).sort((a, b) => b - a)

const top3 = totalCaloriesPerElf.slice(0, 3)

const result = top3.reduce<number>((sum, calories) => {
    return sum + calories
}, 0)

console.log(result);



