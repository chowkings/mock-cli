const fetch = require("node-fetch");

const fetchData = function ({ mockUrl, originUrl }) {
  let result = new Object();
  return new Promise((resolve, reject) => {
    fetch(mockUrl)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        result[originUrl] = res;
        resolve(result);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

module.exports = fetchData;
