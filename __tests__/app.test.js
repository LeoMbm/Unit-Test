const app = require('../app')
describe('Palindrome', () => {
    it('should return a palindrome', () => {
        expect(app.isPalindrome('kayak')).toEqual(true);
    })
    it('should not return a palindrome', () => {
        expect(app.isPalindrome('jeremy')).toEqual(false);
    })
})