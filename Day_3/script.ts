import {syncReadFile} from '../Utils/functions'

/**
 * MAGIC VALUE => a = 97 in ASCII TABLE that's I want to decrease the value.
 *
 * AMAZING_MAGIC_VALUE => A = 65 in ASCII TABLE but we want the value A is 27, for that reason (-38 = 26-64 )
 */
const MAGIC_VALUE = -96
const AMAZING_MAGIC_VALUE = -38

const allCompartments = syncReadFile('input')
    .split('\n')
    .map(value => {
        return [value.slice(0, value.length / 2), value.slice(value.length / 2, value.length)]
    })


/**
 * Part 1
 */

let result = 0

allCompartments.map(compartment => {
    let itemType = getItemsType(compartment).values();
    result += getValueFromItemType(itemType.next().value);
})


function getValueFromItemType(value: string) {
    if (value === value.toLowerCase()) {
        return value.charCodeAt(0) + MAGIC_VALUE
    } else {
        return value.charCodeAt(0) + AMAZING_MAGIC_VALUE
    }
}

function getItemsType(compartment: string[]) {
    let itemsType: Set<string> = new Set<string>;

    for (let i = 0; i < compartment.length - 1; i++) {
        compartment[i].split('').map(value => {
            compartment[i + 1].split('').map(value1 => {
                if (value1 === value) {
                    itemsType.add(value1)
                }
            })
        })
    }
    return itemsType;
}

console.log(result)


/**
 * Part 2 - SKIPPED
 */

let result1 = 0;
let index = 1;
let currentValues: Set<string> = new Set<string>;

allCompartments.map(compartment => {
    if (index % 3 === 0) {
        result1 += getValueFromItemType(currentValues.values().next().value);
        currentValues.clear()
    } else {
        currentValues.add(getItemsType(compartment).values().next().value)
    }
    index++;
})

console.log(result1)
