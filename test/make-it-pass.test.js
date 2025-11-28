const test = require("tape");

function sum(a, b){
    return a+b;
}


test('addition works', function(t){
    t.equals(3, sum(1,2));
    t.end();
});