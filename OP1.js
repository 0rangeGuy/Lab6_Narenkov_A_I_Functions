// Подключаем модуль для работы с файлами
const fs = require('fs');
// Подключаем модуль для работы с консолью
const readline = require('readline');

// Функция для добавления студента в файл
function addStudentToFile() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Введите данные о студенте (ФАМИЛИЯ ИМЯ ГОД_РОЖД МЕСТО_РОЖД ПОЛ): ', (data) => {
    // Записываем данные о студенте в файл
    fs.appendFile('students.txt', data + '\n', (err) => {
      if (err) throw err;
      console.log('Данные успешно добавлены в файл');
    });
    rl.close();
  });
}

// Функция для удаления студента из файла
function deleteStudentFromFile() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Введите номера студентов, которых нужно удалить (через пробел): ', (numbers) => {
    // Читаем все данные из файла
    fs.readFile('students.txt', 'utf8', (err, data) => {
      if (err) throw err;
      // Преобразуем строки в массив
      let students = data.split('\n');
      // Удаляем выбранные строки
      numbers.split(' ').forEach((num) => {
        students.splice(num - 1, 1);
      });
      // Записываем обновленные данные в файл
      fs.writeFile('students.txt', students.join('\n'), (err) => {
        if (err) throw err;
        console.log('Данные успешно удалены из файла');
      });
    });
    rl.close();
  });
}

// Функция для сортировки списка студентов
function sortStudentsInFile() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Выберите поле для сортировки (ФАМИЛИЯ, ИМЯ, ГОД_РОЖД, МЕСТО_РОЖД, ПОЛ): ', (field) => {
    // Читаем все данные из файла
    fs.readFile('students.txt', 'utf8', (err, data) => {
      if (err) throw err;
      // Преобразуем строки в массив
      let students = data.split('\n');
      // Сортируем массив по выбранному полю
      if (field === 'ФАМИЛИЯ') {
        students.sort((a, b) => a.split(' ')[0].localeCompare(b.split(' ')[0]));
      } else if (field === 'ИМЯ') {
        students.sort((a, b) => a.split(' ')[1].localeCompare(b.split(' ')[1]));
      } else if (field === 'ГОД_РОЖД') {
        students.sort((a, b) => a.split(' ')[2] - b.split(' ')[2]);
      } else if (field === 'МЕСТО_РОЖД') {
        students.sort((a, b) => a.split(' ')[3].localeCompare(b.split(' ')[3]));
      } else if (field === 'ПОЛ') {
        students.sort((a, b) => a.split(' ')[4].localeCompare(b.split(' ')[4]));
      }
      // Записываем обновленные данные в файл
      fs.writeFile('students.txt', students.join('\n'), (err) => {
        if (err) throw err;
        console.log('Список студентов успешно отсортирован');
      });
    });
    rl.close();
  });
}

// Главная функция
function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Выберите действие (добавить/удалить/сортировать/выйти): ', (action) => {
    if (action === 'добавить') {
      addStudentToFile();
    } else if (action === 'удалить') {
      deleteStudentFromFile();
    } else if (action === 'сортировать') {
      sortStudentsInFile();
    } else if (action === 'выйти') {
      rl.close();
    } else {
      console.log('Неверное действие');
    }
  });
}

// Запускаем главную функцию
main();