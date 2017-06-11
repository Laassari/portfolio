
function spinalCase(str) {
  var txt = str;
  var pat = txt.replace(/[A-Z]/g, "-" + "$&");
  var pat2 = pat.replace(" ", "");
  return pat2.toLowerCase();
}

spinalCase("This Is Spinal Tap");
