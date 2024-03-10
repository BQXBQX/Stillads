import Creator from "./Creator.js";
import PromptModuleAPI from "./PromptModuleAPI.js";
import inquirer from "inquirer";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

async function getPromptModules() {
  const modulePaths = ["babel", "router", "vuex", "linter"];

  const modules = await Promise.all(
    modulePaths.map((path) => import(`./promptModules/${path}.js`))
  );

  return modules.map((module) => module.default);
}

const __filename = fileURLToPath(import.meta.url);
const currentFolderPath = path.dirname(__filename);
const sourceFolder = path.resolve(currentFolderPath, "../templates/js-react-oxlint-rsbuild-commitizen");

export default async function create(name) {
  const destinationFolder = `${name}`;
  const creator = new Creator();
  const promptModules = await getPromptModules();
  const promptAPI = new PromptModuleAPI(creator);
  promptModules.forEach((m) => m(promptAPI));

  const answers = await inquirer.prompt(creator.getFinalPrompts());

  console.log(answers);

  // fs.copy(sourceFolder, destinationFolder, (err) => {
  //   if (err) {
  //     console.error('Error copying folder:', err);
  //     return;
  //   }

  //   console.log('Folder copied successfully.');
  // });
}
