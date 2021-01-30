function telephoneCheck(str) {
  var pattern = /^[1]{0,1}\s*\d{3}(-|\s)*\d{3}(-|\s)*\d{4}$|^[1]{0,1}\s*\(\d{3}\)(-|\s)*\d{3}(-|\s)*\d{4}$/;
  return str.match(pattern) == null? false:true;
}
