#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const ora = require("ora");

const fetchData = require("../lib/fetchData");
const writeData = require("../lib/writeData");

const rootDir = process.cwd();

const spinner = ora("Download ...").start();

let mockApi = fs.readFileSync(path.resolve(rootDir, "_mock_api_.json"), {
  encoding: "utf8",
});
mockApi = JSON.parse(mockApi);

const fetchCache = [];

mockApi.forEach((element) => {
  if (element.proxy) {
    fetchCache.push(
      fetchData({ mockUrl: element.mockUrl, originUrl: element.originUrl })
    );
  }
});

Promise.all(fetchCache)
  .then((res) => {
    // console.log(res);
    writeData(res);
    spinner.succeed("mock数据下载成功，快去愉快地mock吧 🍺");
  })
  .catch((err) => {
    console.log(err);
    spinner.fail("mock数据下载失败，请检查网络及配置是否正确 💔");
  });
