function getRandomArbitrary (min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}

function PrintArray(n,arr) {
    i = 0;
    while (i<=n-1) {
        console.log(arr[i]);
        i++;
    }
}


//m-столбцы n-строки
let m = 3, n = 3, arr = Array();
//генерация матрицы
for (let i = 0; i < n; i++) {
    arr.push([]);
    for (let j = 0; j < m; j++) {
        arr[i][j] = getRandomArbitrary(-10, 10);
    }
}
console.log('Изначальный массив:');
PrintArray(n,arr);


let k = getRandomArbitrary(1,n);
arr.splice(k-1,1);

console.log('------------------------------');
console.log('K = '+k);
console.log();
console.log('Конечный массив:');
PrintArray(n,arr);
