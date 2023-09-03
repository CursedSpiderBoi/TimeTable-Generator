const xlsx = require("xlsx");
const fs = require("fs");

const workbook = xlsx.readFile("./assets/timetable.xlsx");
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const data = xlsx.utils.sheet_to_json(worksheet);

function deleteRowsWithInvalidData(filePath) {
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const newData = data.filter((row) => {
    const lastValue = row[Object.keys(row)[Object.keys(row).length - 1]];
    return (
      lastValue !== "MSP-2022 " &&
      lastValue !== "No. of Sessions" &&
      lastValue !== "Room Wise"
    );
  });
  fs.writeFileSync(filePath, JSON.stringify(newData, null, 2));
}

function replaceTextInFile(filePath, oldText, newText) {
    const data = fs.readFileSync(filePath, "utf8");
    const newData = data.replace(new RegExp(oldText, "g"), newText);
    fs.writeFileSync(filePath, newData);
}

function addClassNameToTimings(data) {
  const newData = data.map((row) => {
    const className = row["Class"];
    const timings = Object.keys(row).filter((key) => key !== "Class");
    const newTimings = timings.map((timing) => {
      return {
        timings: `${className} ${timing}`,
        class: row[timing],
      };
    });
    return newTimings;
  }).flat();
  fs.writeFileSync("./data.js", JSON.stringify(newData, null, 2));
}

fs.writeFileSync("./data.js", JSON.stringify(data, null, 2));
deleteRowsWithInvalidData("./data.js");
replaceTextInFile(
  "./data.js",
  "FAST School of Computing TIME TABLE Fall 2023 <v1.5>",
  "Day"
);
replaceTextInFile("./data.js", "__EMPTY_68", "7:00 PM");
replaceTextInFile("./data.js", "__EMPTY_59", "5:30 PM");
replaceTextInFile("./data.js", "__EMPTY_50", "4:00 PM");
replaceTextInFile("./data.js", "__EMPTY_41", "2:30 PM");
replaceTextInFile("./data.js", "__EMPTY_32", "1:00 PM");
replaceTextInFile("./data.js", "__EMPTY_23", "11:30 AM");
replaceTextInFile("./data.js", "__EMPTY_14", "10:00 AM");
replaceTextInFile("./data.js", "__EMPTY_5", "8:30 AM");
replaceTextInFile("./data.js", "__EMPTY", "Class");
replaceTextInFile("./data.js", "__EMPTY_1", "Course Code");
// from here its sheet orientated
replaceTextInFile("./data.js", " Monday                 Monday        ", "Monday");
replaceTextInFile("./data.js", " Tuesday                   Tuesday", "Tuesday");
replaceTextInFile("./data.js", "Wednesday                     Wednesday", "Wednesday");
replaceTextInFile("./data.js", "Thursday          Thursday                       ", "Thursday");
replaceTextInFile("./data.js", "Friday          Friday                    ", "Friday");
replaceTextInFile("./data.js", "Saturday      Saturday", "Saturday");

// addClassNameToTimings(data);


  



