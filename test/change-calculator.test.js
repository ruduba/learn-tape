const test = require("tape");
const calculateChange = require('../lib/change-calculator.js')

//const change = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1] IN RUPEES

test('calculateChange(215, 300) should return: [50, 20, 10, 5]', function(t){
    const result = calculateChange(215, 300);
    const expected = [50, 20, 10, 5];
    t.deepEqual(result, expected);
    t.end();
})

test('calculateChange(416, 500) should return: [50, 20, 10, 2, 2]', function(t){
    const result = calculateChange(416, 500);
    const expected = [50, 20, 10, 2, 2];
    t.deepEqual(result, expected);
    t.end();
})

test('calculateChange(1001, 2000) should return: [500, 200, 200, 50, 20, 20, 5, 2, 2]', function(t){
    const result = calculateChange(1001, 2000);
    const expected = [500, 200, 200, 50, 20, 20, 5, 2, 2];
    t.deepEqual(result, expected);
    t.end();
})

test('calculateChange(7356, 10000) should return: [2000, 500, 100, 20, 20, 2, 2 ]', function(t){
    const result = calculateChange(7356, 10000);
    const expected = [2000, 500, 100, 20, 20, 2, 2 ];
    t.deepEqual(result, expected);
    t.end();
})