import Creator from './Creator.js';
import PromptModuleAPI from './PromptModuleAPI.js';
import inquirer from 'inquirer';
import fs from 'fs-extra';

async function getPromptModules() {
  const modulePaths = ['babel', 'router', 'vuex', 'linter'];

  const modules = await Promise.all(
    modulePaths.map((path) => import(`./promptModules/${path}.js`))
  );

  return modules.map((module) => module.default);
}

const sourceFolder = 'templates/default';
const destinationFolder = 'temp';

export default async function create(name) {
  const creator = new Creator();
  const promptModules = await getPromptModules();
  const promptAPI = new PromptModuleAPI(creator);
  promptModules.forEach((m) => m(promptAPI));

  const answers = await inquirer.prompt(creator.getFinalPrompts());

  fs.copy(sourceFolder, destinationFolder, (err) => {
    if (err) {
      console.error('Error copying folder:', err);
      return;
    }

    console.log('Folder copied successfully.');
  });
}
