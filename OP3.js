const fs = require('fs');
const path = require('path');

const directoryPath = process.argv[2]; // Получаем каталог из аргументов командной строки

if (!directoryPath) {
  console.log('Не указан каталог');
  process.exit(1);
}

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Ошибка чтения каталога:', err);
    process.exit(1);
  }

  files.forEach(file => {
    const filePath = path.join(directoryPath, file);

    if (fs.statSync(filePath).isDirectory()) {
      const subDirectories = fs.readdirSync(filePath).filter(subDir => {
        return fs.statSync(path.join(filePath, subDir)).isDirectory();
      });

      if (subDirectories.length === 0) {
        console.log(file);
      }
    }
  });
});
