import chalk from "chalk";
import pkgUp from "package-up";

function getConfig() {
  const pkgPath = pkgUp.sync({ cwd: process.cwd() });
  const pkg = require(pkgPath);
  if (pkg.tool) {
    console.log("Found configuration", pkg.tool);
    return pkg.tool;
  } else {
    console.log(chalk.yellow("Could not find configuration, using default"));
    return { port: 1234 };
  }
}

export default getConfig;