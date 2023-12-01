// Задание 2.
// Для любого задания лабораторных работ № 5 и №6 реализовать ввод,
// формирование / обработку и вывод массивов с применением функций.

// Подключаем модуль для работы с консолью
const prompt = require('prompt-sync')({ sigint: true });
function inPut() {
    let arr = Array()
    let mn = prompt('Введите m-строки n-столбцы через пробел: ');
    for (let i = 0; i < Number(mn.split(' ')[0]); i++) {
        arr.push([]);
        for (let j = 0; j < Number(mn.split(' ')[1]); j++){
            arr[i].push(prompt('Введите ' + (i + 1) + ' элемент строки: '));
        }
    }
    console.log(arr);
    return arr, Number(mn.split(' ')[0]), Number(mn.split(' ')[1])
}
function task() {
    let mat = Array();
    let information,A,B = inPut();
    for (let i = 0; i < A; i++) {
        mat.push([]);
        for (let j = 0; j < B; j++) {
            mat[i][j] = information[0][j];
        }
    }
    return mat;
}
function outPut(mat) {
    console.log('Матрица: ' + mat);
    for (let i = 0; i < mat.lenght; i++) {
        let arr = Array();
        for (let j = 0; j < mat[0].lenght; j++) {
            arr.push(mat[i][j]);
        }
        console.log(arr);
    }
}
outPut(task());
