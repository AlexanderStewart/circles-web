export function selectedBeside(i, circleStates) {
    var indexes = [];
    for(var z = 0; z < circleStates.length; z++) {
        if (circleStates[z] === "selected") {
            indexes.push(z);
        }
    }

    var besideA = checkBeside(i, indexes[0]);
    var besideB = checkBeside(i, indexes[1]);

    if(besideA || besideB) {
        return true;
    }

    return false;
}

function checkBeside(i, j) {
    if(leftBeside(i, j))
        return true;

    if(rightBeside(i, j))
        return true;

    if(remainingTopBeside(i, j))
        return true;

    if(remainingBottomBeside(i, j))
        return true;

    if(centerBeside(i, j))
        return true;

    return false;
}

function leftBeside(i, j) {
    if(i === 0) {
        if(j === 1 || j === 4) {
            return true;
        }
    }
    else if(i === 4) {
        if(j === 0 || j === 1 || j === 5 || j === 8 || j === 9) {
            return true;
        }
    }
    else if(i === 8) {
        if(j === 4 || j === 9 || j === 12) {
            return true;
        }
    }
    else if(i === 12) {
        if(j === 13 || j === 9 || j === 8) {
            return true;
        }
    }

    return false;
}

function rightBeside(i, j) {
    if(i === 3) {
        if(j === 2 || j === 6 || j === 7) {
            return true;
        }
    }
    else if(i === 7) {
        if(j === 6 || j === 11 || j === 3) {
            return true;
        }
    }
    else if(i === 11) {
        if(j === 10 || j === 15 || j === 14 || j === 7 || j === 6) {
            return true;
        }
    }
    else if(i === 15) {
        if(j === 14 || j === 11) {
            return true;
        }
    }

    return false;
}

function remainingTopBeside(i, j) {
    if(i === 1 || i === 2) {
        if(i - 1 === j || i + 1 === j || i + 3 === j || i + 4 === j) {
            return true;
        }
    }

    return false;
}

function remainingBottomBeside(i, j) {
    if(i === 13 || i === 14) {
        if(i - 1 === j || i + 1 === j || i - 3 === j || i - 4 === j) {
            return true;
        }
    }

    return false;
}

function centerBeside(i, j) {
    if(i === 5 || i === 6) {
        if(i - 1 === j || i + 1 === j || i + 4 === j || i + 5 === j || i - 3 === j || i - 4 === j) {
            return true;
        }
    }
    else if(i === 9 || i === 10) {
        if(i - 1 === j || i + 1 === j || i + 3 === j || i + 4 === j || i - 4 === j || i - 5 === j) {
            return true;
        }
    }

    return false;
}