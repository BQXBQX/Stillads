import Creator from "./Creator.js";
import PromptModuleAPI from "./PromptModuleAPI.js";
import inquirer from "inquirer";
import path from "path";
import { fileURLToPath } from "url";
import writePackage from "./utils/writePackage.js";
import copyPackage from "./utils/copyPackage.js";
import createIgonre from "./utils/createIgonre.js";
import figlet from "figlet";
import ora from "ora";
import chalk from "chalk";

async function getPromptModules() {
  const modulePaths = ["commitizen", "oxlint"];

  const modules = await Promise.all(
    modulePaths.map((path) => import(`./promptModules/${path}.js`))
  );

  return modules.map((module) => module.default);
}

const __filename = fileURLToPath(import.meta.url);
const currentFolderPath = path.dirname(__filename);

export default async function create() {
  const creator = new Creator();
  const promptModules = await getPromptModules();
  const promptAPI = new PromptModuleAPI(creator);
  promptModules.forEach((solveFunction) => solveFunction(promptAPI));

  //Showcase Art Lettering
  const result = await figlet("Stillads");
  console.log(result);

  const answers = await inquirer.prompt(creator.getFinalPrompts());

  //Folder names for rendering templates based on user requirements
  const templateFolderName = `templates/js-react-${
    answers.features.includes("oxlint") ? "oxlint-" : ""
  }rsbuild${answers.features.includes("commitizen") ? "-commitizen" : ""}`;

  const sourceFolder = path.resolve(
    currentFolderPath,
    `../${templateFolderName}`
  );

  const sourcePkg = path.resolve(
    currentFolderPath,
    `../${templateFolderName}/package.json`
  );

  const spinner = ora("loading").start();

  await writePackage(sourcePkg, answers.name);

  await copyPackage(sourceFolder, answers.name);

  await createIgonre(answers.name);

  spinner.succeed("Successfully");

  console.log(chalk.blueBright(`\nLet us start your project`));

  console.log(chalk.blueBright(`\ncd ${answers.name}`));

  console.log(chalk.blueBright(`pnpm i`));
}
