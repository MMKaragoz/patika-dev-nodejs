const fs = require("fs");

try {
  fs.writeFileSync(
    "employees.json",
    '{"name": "Employee 1 Name", "salary": 2000}',
    "utf8"
  );
  console.log("The file has been created.");
} catch (err) {
  console.log(err);
}

try {
  console.log(fs.readFileSync("employees.json", "utf8"));
  console.log("The file has been read.");
} catch (err) {
  console.log(err);
}

try {
  fs.appendFileSync(
    "employees.json",
    '{ "name": "Mert", "salary": 1 }',
    "utf8"
  );
  console.log("The file has been updated.");
} catch (err) {
  console.log(err);
}

try {
  fs.unlinkSync("employees.json");
  console.log("The file has been deleted.");
} catch (err) {
  console.log(err);
}
