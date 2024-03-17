#!/usr/bin/env node
import arg from "arg";
import chalk from "chalk";
import getConfig from "../src/config/config-mgr.js";
import start from "../src/commands/start.js";


try {
  const args = arg({
    "--start": Boolean,
    "--build": Boolean,
    "--help": Boolean,
  });

  if(args["--start"]) {
    const config = getConfig();
    start(config);
  }
  if (args["--help"]) {
    console.log(
      chalk.yellow(`Usage: tool <command>
    --start\tStarts the app
    --build\tBuilds the app
    `)
    );
  }
} catch (e) {
  console.log(chalk.yellow(e.message));
  usage();
}

function usage() {
  console.log(`${chalk.whiteBright("Trying this:")} 
    ${chalk.greenBright("--help")}\tShow more commands
    `);
}
