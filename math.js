var a = process.argv[2];
var b = process.argv[3];
var c = 4;

function add(a, b, c) {
  var total = parseInt(a) + parseInt(b) + parseInt(c);
  console.log(total);
}

add(a, b, c);

function greeting() {
  return "Greetings Human";
}

greeting();
