function setup() {
  createCanvas(800, 800);
}

// this function will draw the table that the parser will use
function draw() {
  background(220);
}

// this function will parse the input expression
function parse(){
  const input = document.getElementById("inputExpression").value; // grabs the expression that the user inputs

  // grammar rules that the parser has to follow
  const grammar = [
    ["E", "E", "+", "T"],
    ["E", "T"],
    ["T", "T", "*", "F"],
    ["T", "F"],
    ["F", "(", "E", ")"],
    ["F", "id"]
  ];
}