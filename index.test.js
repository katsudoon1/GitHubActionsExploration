// index.test.js
const double = require('./index');

test('doubles 2 to be 4', () => {
  expect(double(2)).toBe(4);
});
