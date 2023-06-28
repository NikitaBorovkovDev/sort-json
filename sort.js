const fs = require("fs");

const jsonContent = fs.readFileSync("./data.json", "utf8");

const data = JSON.parse(jsonContent);

const sortedData = data.map((obj) => {
    return obj.city;
});
console.log(sortedData);
// Преобразование отсортированного массива в JSON-строку
const sortedJson = JSON.stringify(sortedData);

// Сохранение отсортированной JSON-строки в файл
fs.writeFileSync("sortedData.json", sortedJson, "utf8");
