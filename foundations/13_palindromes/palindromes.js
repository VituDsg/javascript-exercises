const palindromes = function (str) {
    let text = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let invertText = text.split('').reverse().join('');

    if (invertText === text) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
