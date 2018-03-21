var str = document.getElementById('word1').innerHTML;
var word2 = document.getElementById('word2');
var check = document.getElementById('check');

var game = {
    'answer': str
};
game.word = str.split('');
game.btns = [];

game.updateDisplay = function () {
    if (game.answer === game.word.join('')) {
        check.innerHTML = '일치합니다';
    } else {
        check.innerHTML = '일치하지 않습니다';
    }
};

for (var i = 0; i < str.length; i++) {
    var btn = document.createElement('button');
    btn.innerHTML = str[i];
    word2.appendChild(btn);
    game.btns.push(btn);
}

game.copyBtnText = function () {
    for (var i = 0; i < this.word.length; i++) {
        this.btns[i].innerHTML = this.word[i];
    }
}

var swap = function (event) {
    var temp = [];
    //copy and swap
    while (game.word.length != 0) {
        var s = game.word.pop();
        temp.push(s);
    }

    game.word = temp;
    game.copyBtnText();
    game.updateDisplay();
};

var rshift = function (event) {
    var s = game.word.pop();
    game.word.unshift(s);
    game.copyBtnText();
    game.updateDisplay();
};

var lshift = function (event) {
    var s = game.word.shift();
    game.word.push(s);
    game.copyBtnText();
    game.updateDisplay();
};