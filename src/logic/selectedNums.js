export function selectedNums(circleStates, circleValues) {
    var indexes = [];
    for(var z = 0; z < circleStates.length; z++) {
        if (circleStates[z] === "selected") {
            indexes.push(z);
        }
    }

    var sumOfSelected = circleValues[indexes[0]] + circleValues[indexes[1]];

    return sumOfSelected;
}