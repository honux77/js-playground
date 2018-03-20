var input = {'array': []};

input.getInput = function() {
    return this.array.join("");
};

var output = {};
output.text = document.getElementById('output');

var clickNumbers = function(event) {
    var str = event.target.innerHTML;
    console.log(str);

    switch (str) {
        case 'BS':
        input.array.pop();
        break;
        case '+':
        input.array.push(' ' + str + ' '); 
        break;
        case '-':
        input.array.push(' ' + str + ' '); 
        break;
        case '*':
        input.array.push(' ' + str + ' '); 
        break;
        case '/':
        input.array.push(' ' + str + ' '); 
        break;
        default:
        input.array.push(str);        
    }

    if (input.array.length === 0) {
        output.text.innerHTML = "Empty";
    } else {
        output.text.innerHTML = input.getInput();
    }
}

var showResult = function(event) {
    console.log("click others");
    console.log(event.target.innerHTML);

}


        
// input.init = function(str) {
//     this.list = str.split(" ");   
// };

// input.empty = function() {
//     return this.list.length == 0;
// };

// input.getValue = function() {
//     var str = this.list.shift();
//     var n = Number(str);
//     return n;
// };        

// input.getOperator = function() {
//     var op = this.list.shift();
//     if (op === "+" || op === "-" || op === "*" || op === "/") {
//         return op;
//     } else {
//         return "$";
//     }            
// };      

// calculator = {};
// calculator.calculate = function(first, second, op) {
//     var ret;
//     switch(op) {
//         case "+":
//         ret = first + second;
//         break;
//         case "-":
//         ret = first - second;
//         break;
//         case "*":
//         ret = first * second;
//         break;
//         case "/":
//         ret = first / second;
//         break;  
//         default:
//         return NaN;         
//     }
//     return ret;
// }

// var output = {};
// output.out = document.getElementById('output');

// output.print = function(value) {
//     this.out.innerHTML =  "최종 결과값은 " + value + "입니다.";
// };    

// function calc() {
//     var str = document.getElementById('input').value;
//     input.init(str);
//     var result = input.getValue();
//     while (!input.empty()) {
//         var op = input.getOperator();
//         var second = input.getValue();
//         result = calculator.calculate(result, second, op);
//     }            
//     output.print(result);
// }       