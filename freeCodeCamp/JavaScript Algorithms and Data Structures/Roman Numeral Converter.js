function convertToRoman(num) {
    var sNum = "";
    var oneDigit = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    var twoDigit = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    var threeDigit = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];

    if (Math.floor(num / 1000)) {
        sNum += 'M'.repeat(Math.floor(num/1000));
        num %= 1000;
    }

    if (Math.floor(num / 100)) {
        sNum += threeDigit[Math.floor(num/100)-1];
        num %= 100;
    }

    if (Math.floor(num / 10)) {
        sNum += twoDigit[Math.floor(num/10)-1];
        num %= 10;
    }

    if (num) {
        sNum += oneDigit[num-1];
    }

    return sNum;
}
