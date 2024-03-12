import fs from "fs-extra";
import chalk from "chalk";
const fileContent = `
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
  `;

export default async (destinationFolder) => {
  const filePath = `${destinationFolder}/.gitignore`;
  try {
    await fs.appendFile(filePath, fileContent);
    console.log(chalk.green("Successfully written .gitignore"));
  } catch (error) {
    console.error(chalk.red("Error write .ignore", error));
  }
};
