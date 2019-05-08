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

//Set request status
const setStatus = (method, index) => {
    
    if (!isValidMethod(method)) {
        return 400
    } else if (!isValidIndex(index)) {
        return 404
    } else {
        return 200
    }
};

// Complete this function:
const presetHandler = (method, index, newPresetArray) => {
 
    let response = [];
    
    response.push(setStatus(method, index));

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
