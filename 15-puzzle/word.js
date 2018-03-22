//html elements
var word1 = document.getElementById('word1'); //answer
var word2 = document.getElementById('word2'); //buttons
var check = document.getElementById('check'); //word1 === word2?

//game objects
var game = {
    'btns': []
};

game.words = 'apple,linux,javascript,tutorial,codesquad,baby,girlfriend,legend'.split(',');

//choose 1 word from words;
game.choose = function () {
    var idx = Math.floor(Math.random() * this.words.length);
    this.answer = this.words[idx];
    this.letters = this.answer.split('');
    word1.innerHTML = this.answer;
};

game.addButtons = function () {
    for (var i = 0; i < this.letters.length; i++) {
        var btn = document.createElement('button');
        btn.innerHTML = this.letters[i];
        word2.appendChild(btn);
        this.btns.push(btn);
    }
};

game.updateDisplay = function () {
    var gameStr = this.letters.join('');
    if (this.answer === gameStr) {
        check.innerHTML = '일치합니다';
    } else {
        check.innerHTML = '일치하지 않습니다';
    }
};

game.init = function () {
    this.choose();
    this.addButtons();
    this.updateDisplay();
};
game.init();


game.copyBtnText = function () {
    for (var i = 0; i < this.letters.length; i++) {
        this.btns[i].innerHTML = this.letters[i];
    }
};

//event hadler for swap button
var swap = function () {
    var temp = [];
    //copy and swap
    while (game.letters.length != 0) {
        var s = game.letters.pop();
        temp.push(s);
    }

    game.letters = temp;
    game.copyBtnText();
    game.updateDisplay();
};

var rshift = function () {
    var s = game.letters.pop();
    game.letters.unshift(s);
    game.copyBtnText();
    game.updateDisplay();
};

var lshift = function () {
    var s = game.letters.shift();
    game.letters.push(s);
    game.copyBtnText();
    game.updateDisplay();
};

//shuffle
game.shuffle = function () {
    var toggle = Math.floor(Math.random() * 2) === 0;
    if (toggle) {
        swap();
    }

    var n = Math.floor(Math.random() * game.answer.length);
    for (var i = 0; i < n; i++) {
        rshift();
    }
};
game.shuffle();