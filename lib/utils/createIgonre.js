import fs from "fs-extra";
const fileContent = `
  # Local
  .DS_Store
  *.local
  *.log*
  
  # Dist
  node_modules
  dist/
  
  # IDE
  .vscode/*
  !.vscode/extensions.json
  .idea
  `;

export default (destinationFolder) => {
  const filePath = `${destinationFolder}/.gitignore`;
  fs.appendFile(filePath, fileContent, function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
};
