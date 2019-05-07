// Drum Arrays
const drumArrayMax = 16;
const drumArrayMaxIndex = drumArrayMax - 1;
let kicks = Array(drumArrayMax).fill(false);
let snares = Array(drumArrayMax).fill(false);
let hiHats = Array(drumArrayMax).fill(false);
let rideCymbals = Array(drumArrayMax).fill(false);

// Convert string to drum array identifier
const drumId = {
    "kicks": kicks,
    "snares": snares,
    "hiHats": hiHats,
    "rideCymbals": rideCymbals
}

// Toggle function
const toggle = elementToChange => {
    if (elementToChange === true) {
        return false
    } else {
        return true
    }
}

// Check valid drum type
const isValidDrumType = drumParam => {
    if (Object.keys(drumId).includes(drumParam)) {
        return true
    } else {
        console.log("Missing or invalid drum type");
        return false
    }
}

// Check valid index
const isValidIndex = index => {
    if (Number.isInteger(index) && index >= 0 && index <= drumArrayMaxIndex) {
        return true
    } else {
        console.log("Missing or invalid index");
        return false
    }
};

// Toggles the value in a given drum array at a given index
const toggleDrum = (arrayName, index) => {
    if (isValidDrumType(arrayName) && isValidIndex(index)) {
        drumId[arrayName][index] = toggle(drumId[arrayName][index]);
    }
}

// Converts all the values in a given drum array to false
const clear = arrayName => {
    if (isValidDrumType(arrayName)) {
        drumId[arrayName].fill(false)
    }
}

// Toggles all the elements in a given drum array
const invert = arrayName => {
    if (isValidDrumType(arrayName)) {
        drumId[arrayName].forEach((item,index) => drumId[arrayName][index] = toggle(item));
    }
}