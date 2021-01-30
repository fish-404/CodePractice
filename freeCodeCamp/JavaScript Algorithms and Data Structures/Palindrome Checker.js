function palindrome(str) {
    str = str.replaceAll(/\W|_/g, '');
    console.log(str);
    str = str.toLowerCase();

    var p = 0, q = str.length-1;
    while (p != q &&  q+1!=p) {
        if (str[p] != str[q])
            return false;
        p++;
        q--;
    }
    return true;
}
