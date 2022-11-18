// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('test to see if (818)358-7612 is a phone number', () => {
    expect(functions.isPhoneNumber('(818)358-7612)')).toBe(true);
});

test('test to see if (213)597-3254 is a phone number', () => {
    expect(functions.isPhoneNumber('(213)597-3254')).toBe(true);
});

test('test to see if 0000000000 is a phone number', () => {
  expect(functions.isPhoneNumber('0000000000)')).toBe(false);
});

test('test to see if 123 is a phone number', () => {
    expect(functions.isPhoneNumber('123')).toBe(false);
});



test('test to see if lmchen@ucsd.edu is an email', () => {
    expect(functions.isEmail('lmchen@ucsd.edu')).toBe(true);
});

test('test to see if taylorswift13@gmail.com is an email', () => {
    expect(functions.isEmail('taylorswift13@gmail.com')).toBe(true);
});

test('test to see if gmail.com is an email', () => {
    expect(functions.isEmail('gmail.com')).toBe(false);
});

test('test to see if lauren@@@email.com is an email', () => {
    expect(functions.isEmail('lauren@@@email.com')).toBe(false);
});


test('test to see if lauren78 is a strong password', () => {
    expect(functions.isStrongPassword('lauren78')).toBe(true);
});

test('test to see if ucsducsd_ is a strong password', () => {
    expect(functions.isStrongPassword('ucsducsd_')).toBe(true);
});

test('test to see if 10 is a strong password', () => {
    expect(functions.isStrongPassword('10')).toBe(false);
});

test('test to see if hey is a strong password', () => {
    expect(functions.isStrongPassword('hey')).toBe(false);
});


test('test to see if 11/18/2022 is a valid date', () => {
    expect(functions.isDate('11/18/2022')).toBe(true);
});

test('test to see if 1/1/2023 is a valid date', () => {
    expect(functions.isDate('1/1/2023')).toBe(true);
});

test('test to see if 2022/18/2022 is a valid date', () => {
    expect(functions.isDate('2022/18/2022')).toBe(false);
});

test('test to see if 10/80000/2 is a valid date', () => {
    expect(functions.isDate('10/80000/2')).toBe(false);
});


test('test to see if fff is a valid hex color', () => {
    expect(functions.isHexColor('fff')).toBe(true);
});

test('test to see if 328987 is a valid hex color', () => {
    expect(functions.isHexColor('328987')).toBe(true);
});

test('test to see if zwa is a valid hex color', () => {
    expect(functions.isHexColor('zwa')).toBe(false);
});

test('test to see if 098790890 is a valid hex color', () => {
    expect(functions.isHexColor('098790890')).toBe(false);
});