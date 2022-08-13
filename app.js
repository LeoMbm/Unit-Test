
function isPalindrome(text) {
    const reversedWord = text.split('').reverse().join('');
    return reversedWord === text;
}
module.exports = {
    isPalindrome
};