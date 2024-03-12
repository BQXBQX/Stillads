import fs from "fs-extra";
import chalk from "chalk";

export default async (sourcePkg, name) => {
  try {
    const packageData = await fs.readFile(sourcePkg, "utf8");

    const packageObject = JSON.parse(packageData);

    packageObject.name = name;

    const modifiedPackageData = JSON.stringify(packageObject, null, 2);

    await fs.writeFile(sourcePkg, modifiedPackageData, "utf8");

    console.log(chalk.green("\nSuccessfully written package.json"));
  } catch (error) {
    console.error(chalk.red("Error changing package.json", error));
  }
};
