let mas = [1,2];
console.log(mas);
let buf;
for (let i = 0;i<mas.length-2;i=i+2){
    buf = mas[i];
    mas[i]=mas[i+1];
    mas[i+1]= buf;
}
console.log(mas)