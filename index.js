// code your solution here

function saturdayFun(def = "roller-skate") {
    return `This Saturday, I want to ${def}!`


}
saturdayFun()

function mondayWork(def = "go to the office") {
    return `This Monday, I will ${def}.`


}
mondayWork()

function wrapAdjective(string = "*") {
    const innerFunction = function inner(def = "special") {
        return `You are ${string}${def}${string}!`;
    };
    return innerFunction;
}

wrapAdjective("*")("a dedicated programmer");