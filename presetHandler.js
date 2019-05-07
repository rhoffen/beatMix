// Use this presets array inside your presetHandler
const presets = require('./presets');

const maxDrumArrayLength = 16;
const maxDrumArrayIndex = maxDrumArrayLength - 1;

// Check valid index
const isValidIndex = index => {
    if (Number.isInteger(index) && index >= 0 && index <= drumArrayMaxIndex) {
        return true
    } else {
        console.log("Missing or invalid index");
        return false
    }
};

// Check valid method
const isValidMethod = method => {
    const validMethods = ["GET", "PUT"];
    if (validMethods.includes(method)) {
        return true
    } else {
        console.log("Missing or invalid method");
        return false
    }
}

// Complete this function:
const presetHandler = (method, index, newPresetArray) => {
    let status;
    let response = [];

    if (isValidIndex(index)) {
        status = 200;
    } else {
        status = 404;
    }

    if (!isValidMethod(method)) {
        status = 400;
    }

    response.push(status);

    switch (method) {
        case "GET" :    response.push(presets[index]);
                            break;
        case "PUT" :    presets[index] = newPresetArray;
                            response.push(presets[index]);
                            break;
        }
    
    return response;
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
