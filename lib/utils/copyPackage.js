import fs from "fs-extra";
import { promisify } from "util";
import chalk from "chalk";

const copyAsync = promisify(fs.copy);

export default async (sourceFolder, destinationFolder) => {
  try {
    await copyAsync(sourceFolder, destinationFolder);
    console.log(chalk.green("Successfully copy template"));
  } catch (error) {
    console.error(chalk.red("Error copying folder:", error));
  }
};
