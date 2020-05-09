#!/usr/bin/env node

const { program } = require("commander");

program
  .version(require("../package").version)
  .usage("<command> [options]")
  .command(
    "init",
    "generate a _mock_res_.js file in the root directory of your project"
  );

program.parse(process.argv);
