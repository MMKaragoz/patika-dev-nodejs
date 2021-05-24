const fs = require("fs");

fs.writeFile(
  "employees.json",
  '{"name": "Employee 1 Name", "salary": 2000}',
  "utf8",
  (err) => {
    if (err) console.log(err);
    console.log("The file has been created.");
  }
);

fs.readFile("employees.json", "utf8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
  console.log("The file has been read.");
});

fs.appendFile(
  "employees.json",
  '{ "name": "Mert", "salary": 1 }',
  "utf8",
  (err) => {
    if (err) console.log(err);
    console.log("The file has been updated.");
  }
);

fs.unlink("employees.json", (err) => {
  if (err) console.log(err);
  console.log("The file has been deleted.");
});
