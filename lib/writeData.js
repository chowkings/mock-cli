const fs = require("fs");

const writeData = function (mockData) {
  let data = new Object();
  mockData.forEach((element) => {
    let obj = {};
    obj.res = Object.values(element)[0];
    obj.proxy = true;
    data[Object.keys(element)[0]] = obj;
  });
  let jsonData = `module.exports=${JSON.stringify(data)}`;
  fs.writeFileSync("_mock_res_.js", jsonData);
};

module.exports = writeData;
