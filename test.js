// Import necessary libraries
const assert = require('chai').assert;

// Describe the test suite using Mocha
describe('Math operations', function() {
  
  // Test case: Addition
  it('should correctly add two numbers', function() {
    const result = 2 + 3;
    assert.equal(result, 5); // Assert that 2 + 3 equals 5
  });

  // Test case: Subtraction
  it('should correctly subtract two numbers', function() {
    const result = 5 - 3;
    assert.equal(result, 2); // Assert that 5 - 3 equals 2
  });

  // Test case: Multiplication
  it('should correctly multiply two numbers', function() {
    const result = 4 * 2;
    assert.equal(result, 8); // Assert that 4 * 2 equals 8
  });

  // Test case: Division
  it('
