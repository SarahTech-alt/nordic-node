const nodeNumbers = require('./challenges/110-node-numbers');
const nodeObjects = require('./challenges/120-node-objects');
const nodeFunction = require('./challenges/130-node-function');

if (nodeNumbers == 20) {
    console.log('Passed nodeNumbers test!');
} else {
    console.log(`
    XXXXXXXXXXX FAILED nodeNumbers XXXXXXXXXXX
    `);
}

if (nodeObjects.mushers == 20) {
    console.log('Passed nodeObjects test!');
} else {
    console.log(`
    XXXXXXXXXXX FAILED nodeObjects XXXXXXXXXXX
    `);
}
// console.log(nodeFunction(3));
// console.log(nodeFunction(5));
// console.log(nodeFunction(2));
// console.log(nodeFunction(0));

if (nodeFunction(16) == 10) {
    console.log('Passed nodeFunction test 1!');
} else {
    console.log(`
    XXXXXXXXXXX
    FAILED nodeFunction
    function should return 10 when 16 is passed
    XXXXXXXXXXX`);
}

if (nodeFunction(8) == 6) {
    console.log('Passed nodeFunction test 2!');
} else {
    console.log(`
    XXXXXXXXXXX
    FAILED nodeFunction
    function should return 6 when 8 is passed
    XXXXXXXXXXX`);
}

