// Drum Arrays
let kicks = Array(16).fill(false);
let snares = Array(16).fill(false);
let hiHats = Array(16).fill(false);
let rideCymbals = Array(16).fill(false);

const toggle = elementToChange => {
    if (elementToChange === true) {
        return false
    } else {
        return true
    }
}

const toggleDrum = (arrayName, index) => {

    if (!arrayName || index == undefined || index < 0 || index > 15) {
        return;
    }

    let elementToChange;

    switch (arrayName) {
        case "kicks" :  elementToChange = kicks[index];
                        kicks[index] = toggle(elementToChange);
                        break;
        case "snares":  elementToChange = snares[index];
                        snares[index] = toggle(elementToChange);
                        break;
        case "hiHats":  elementToChange = hiHats[index];
                        hiHats[index] = toggle(elementToChange);
                        break;
        case "rideCymbals": elementToChange = rideCymbals[index];
                        rideCymbals[index] = toggle(elementToChange);
                        break;
        default: console.log("Invalid drum type");
    }
}

const clear = arrayName => {
    switch (arrayName) {
        case "kicks" :  kicks.fill(false);
                        break;
        case "snares":  snares.fill(false);
                        break;
        case "hiHats":  hiHats.fill(false);
                        break;
        case "rideCymbals": rideCymbals.fill(false);
                        break;
        default: console.log("Invalid drum type");
    }
}

const invert = arrayName => {
    switch (arrayName) {
        case "kicks" :  //console.log(kicks);
                        kicks.forEach((item,index) => kicks[index] = toggle(item));
                        //console.log(kicks);
                        break;
        case "snares":  snares.forEach((item,index) => snares[index] = toggle(item));
                        break;
        case "hiHats":  hiHats.forEach((item,index) => hiHats[index] = toggle(item));
                        break;
        case "rideCymbals": rideCymbals.forEach((item,index) => rideCymbals[index] = toggle(item));
                        break;
        default: console.log("Invalid drum type");
    }
}