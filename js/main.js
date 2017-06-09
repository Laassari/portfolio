function rot13(str) { // LBH QVQ VG!
  var val = "";
  for(var i = 0; i < str.length; i++){
    if(str[i] === " ") val += " ";
    var charCod = str[i].charCodeAt(0) -13 < 65? str[i].charCodeAt(0) +13: str[i].charCodeAt(0) -13;
    val += String.fromCharCode(charCod);
  }
  return val;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");