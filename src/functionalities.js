const xlsx = require('xlsx');
const fs = require('fs');

const workbook = xlsx.readFile("./assets/FSC_Time_Table__List_of_Courses_Fall_2023_v1.5.xlsx");

function convertToDataSheet() {
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(worksheet).filter(row => !Object.values(row).some(cell => typeof cell === 'string' && cell.includes('__EMPTY_')));
    const filePath = 'data.json';
    if (fs.existsSync(filePath)) {
        fs.truncateSync(filePath, 0);
    }
    fs.writeFileSync(filePath, JSON.stringify(data));
}

function sortDataSheet() {
    const dataSheet = require('../data.json');
    const sortedDataSheet = {};
    for (const sheetName in dataSheet) {
        const data = dataSheet[sheetName];
        const sortedData = data.sort((a, b) => {
            if (a.Course_Code < b.Course_Code) {
                return -1;
            }
            if (a.Course_Code > b.Course_Code) {
                return 1;
            }
            return 0;
        });
        sortedDataSheet[sheetName] = sortedData;
    }
    fs.writeFileSync('./data/data.json', JSON.stringify(sortedDataSheet));
}

convertToDataSheet();
// sortDataSheet();
