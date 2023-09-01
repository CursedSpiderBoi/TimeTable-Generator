const xlsx = require('xlsx');

const workbook = xlsx.readFile("./assets/FSC_Time_Table__List_of_Courses_Fall_2023_v1.5.xlsx");

function logWorksheetNames() {
    const sheetNames = workbook.SheetNames;
    console.log(sheetNames);
}




