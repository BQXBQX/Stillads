import fs from "fs-extra";
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

export default (destinationFolder) => {
  const filePath = `${destinationFolder}/.gitignore`;
  fs.appendFile(filePath, fileContent, function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
};
