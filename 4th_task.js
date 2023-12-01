alert("Результат функции.");  // X = 1\5\4\7
let A = 6.72;
let B = 4.85;
let X = prompt('Введите значение X');
X = Number(X)

switch(X){
    case 1:
        let Y1 = 1+Math.sqrt(A+Math.abs(X));
        alert ('Y = '+Y1);
        break;
    case 7:
        let Y2 = 2+(A*X)**2+Math.exp(1)**X;
        alert ('Y = '+Y2);
        break;
    case 5:
        let Y3 = X*Math.sqrt(1+(B*Math.log((A**2)*X)));
        alert ('Y = '+Y3);
        break;
    default:
        alert ('Такое значение не подразумевалось программой. Попробуй там 1, 7 или 5 я хз.')
}