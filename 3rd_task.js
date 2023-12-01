alert("Результат функции.");  // X = 0,4   7,5  4,45
let A = 6.72;
let B = 4.85;
let X = prompt('Введите значение X');
X = Number(X)
if (X<=1) {
    let Y = 1+Math.sqrt(A+Math.abs(X));
    console.log('1   '+(1+Math.sqrt(A+Math.abs(X))));
    alert ('Y = '+Y);
} else if (X>6) {
    let Y = 2+A*(X**2)+Math.exp(1)**X;
    console.log('2   '+(2+A*(X**2)+Math.exp(1)**X));
    alert ('Y = '+Y);
} else {
    let Y = X*Math.sqrt(1+(B*Math.log((A**2)*X)));
    console.log('3   '+(X*Math.sqrt(1+(B*Math.log((A**2)*X)))));
    alert ('Y = '+Y);
}
