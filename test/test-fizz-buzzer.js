const expect = require('chai').expect

const fizzbuzzer = require('../fizzBuzzer')

describe('fizzbuzzer', () => {
  it('should replace numbers divisible by three with fizz', () => {
    const normalCases = [{a: 3, expected: 'fizz'}]

    normalCases.forEach(input => {
      const answer = fizzbuzzer(input.a)
      expect(answer).to.equal(input.expected)
    })
  })

  it('should replace numbers divisible by five with buzz', () => {
    const normalCases = [{a: 5, expected: 'buzz'}]

    normalCases.forEach(input => {
      const answer = fizzbuzzer(input.a)
      expect(answer).to.equal(input.expected)
    })
  })

  it('should replace numbers divisible by both three and five with fizzbuzz', () => {
    const normalCases = [{a: 15, expected: 'fizz-buzz'}]

    normalCases.forEach(input => {
      const answer = fizzbuzzer(input.a)
      expect(answer).to.equal(input.expected)
    })
  })

  it('should throw an error for non-numeric inputs', () => {
    const badInputs = [{a: NaN}]

    badInputs.forEach(input => {
      expect(function() {
        fizzbuzzer(input[0])
      }).to.throw(Error)
    })
  })
})
