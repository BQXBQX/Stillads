import Creator from "./Creator.js";
import PromptModuleAPI from "./PromptModuleAPI.js";
import inquirer from "inquirer";
import path from "path";
import { fileURLToPath } from "url";
import writePackage from "./utils/writePackage.js";
import copyPackage from "./utils/copyPackage.js";

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
  promptModules.forEach((m) => m(promptAPI));

  const answers = await inquirer.prompt(creator.getFinalPrompts());

  console.log(answers);

  const sourceFolder = path.resolve(
    currentFolderPath,
    `../templates/js-react-${
      answers.features.includes("oxlint") ? "oxlint-" : ""
    }rsbuild${answers.features.includes("commitizen") ? "-commitizen" : ""}`
  );

  const sourcePkg = path.resolve(
    currentFolderPath,
    `../templates/js-react-${
      answers.features.includes("oxlint") ? "oxlint-" : ""
    }rsbuild${
      answers.features.includes("commitizen") ? "-commitizen" : ""
    }/package.json`
  );

  writePackage(sourcePkg, answers.name);

  copyPackage(sourceFolder, answers.name);
}
