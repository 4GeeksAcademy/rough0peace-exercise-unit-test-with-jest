// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };


let oneEuroIs = {
    "JPY": 156.5, // Japan yen
    "USD": 1.07, // US dollar
    "GBP": 0.87, // British pound
};

function fromEuroToDollar(euro){
    console.log("object test", oneEuroIs.USD)
    let dollar = euro * oneEuroIs.USD;
    return dollar;
}

function fromDollarToYen(dollar){
    let yen = dollar / oneEuroIs.USD  * oneEuroIs.JPY;
    return yen;
}

function fromYenToPound(yen){
    let pound = yen * oneEuroIs.GBP / oneEuroIs.JPY;
    return pound;
}