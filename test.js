// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should be 156.5 yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const yen = fromDollarToYen(3.5);

    // If 1 dollar is 156.5 yen, then 3.5 dollars should be (3.5 * 156.5)
    const expected = 3.5 * 156.5 / 1.07; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(3.5 * 156.5 / 1.07); // 1 dollar is 156.5 yen, then 3.5 dollars should be = (3.5 * 156.5)
})

test("One yen should be 0.0063 pounds", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const pound = fromYenToPound(3.5);

    // If 1 yen is 0.0063 pounds, then 3.5 yen should be (3.5 * 0.0063)
    const expected = 3.5 * 0.0063; 
    
    // This is the comparison for the unit test
     expect(fromYenToPound(3.5)).toBe(3.5 * 0.0063); // 1 yen is 0.0063 pounds, then 3.5 yen should be = (3.5 * 0.0063)
}) 
