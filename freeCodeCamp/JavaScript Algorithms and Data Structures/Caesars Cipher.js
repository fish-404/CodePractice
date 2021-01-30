function rot13(str) {
  var newStr = "";
  for (let i of str) {
    if (isAlph(i)) {
      newStr += rot13Single(i);
    }
    else {
      newStr += i;
    }
  }
  return newStr;
}

function isAlph(c) {
  var pattern = /[A-Z]/g;
  if (c.match(pattern))
    return true;
  else
    return false;
}

function rot13Single(c) {
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return letters[(letters.indexOf(c)+13)%26];
}
