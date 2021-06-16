const removeVowel = require('./index')

test('ReverseVowel function exists', () => {
  expect(removeVowel).toBeDefined()
})

test(`Remove ['a', 'e', 'i'] in 'asdioe', should return sd`, () => {
  expect(removeVowel('asdioe', ['a', 'e', 'i'])).toEqual('sdo')
})

test(`Remove ['a', 'e', 'i', 'o'] in 'Hello World.', should return Hll Wrld`, () => {
  expect(removeVowel(`Hello World.`, ['a', 'e', 'i', 'o'])).toEqual(`Hll Wrld.`)
})

test(`Remove ['a', 'e', 'i', 'o'] in 'HELLO World.', should return HLL Wrld.`, () => {
  expect(removeVowel(`HELLO World.`, ['a', 'e', 'i', 'o'])).toEqual(`HLL Wrld.`)
})
