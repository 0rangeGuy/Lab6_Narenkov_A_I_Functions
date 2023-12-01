const fs = require('fs');
const path = require('path');

const directoryPath = process.argv[2]; // Получаем каталог из аргументов командной строки

if (!directoryPath) {
  console.log('Не указан каталог');
  process.exit(1);
}

const logFilePath = path.join(__dirname, 'delete-log.txt'); // Путь к лог-файлу

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Ошибка чтения каталога:', err);
    process.exit(1);
  }

  files.forEach(file => {
    const filePath = path.join(directoryPath, file);

    if (fs.statSync(filePath).isFile() && fs.statSync(filePath).size === 0) {
      fs.appendFileSync(logFilePath, "Файл"+ file + "удален\n");
      fs.unlinkSync(filePath); // Удаляем пустой файл
    }
  });

  console.log('Удаление пустых файлов завершено');
});