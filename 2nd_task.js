const prompt = require("prompt-sync")({ sigint: true });

function enter () {
    let x = prompt('Введите число: ');
    return x;
}    

function moreLess (x) {
    if (x>0) {
        return 0
    }
    else {
        return 1
    }
}

function out (){
    console.log(moreLess(enter())+moreLess(enter())+moreLess(enter()))
}

out()