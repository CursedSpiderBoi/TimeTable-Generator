const xlsx = require('xlsx');
const fs = require('fs');

const workbook = xlsx.readFile("./assets/FSC_Time_Table__List_of_Courses_Fall_2023_v1.5.xlsx");

const sheet_name_list = workbook.SheetNames;

function readSheetData(sheetIndex) {
    const worksheet = workbook.Sheets[sheet_name_list[sheetIndex]];
    const rows = xlsx.utils.sheet_to_json(worksheet, { header: 1, defval: null });
    const data = rows.filter(row => row.some(cell => cell !== null));
    return data;
}

function writeDataToFile(data) {
    const content = `module.exports = ${JSON.stringify(data)};`;
    fs.truncate('./data.js', 0, (err) => {
        if (err) throw err;
        fs.writeFile('./data.js', content, (err) => {
            if (err) throw err;
            console.log('Data written to file');
        });
    });
}

writeDataToFile(readSheetData(0));