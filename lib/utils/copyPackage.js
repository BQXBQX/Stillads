import fs from "fs-extra";

export default (sourceFolder, destinationFolder) => {
  console.log(sourceFolder);
  fs.copy(sourceFolder, destinationFolder, (err) => {
    if (err) {
      console.error("Error copying folder:", err);
      return;
    }

    console.log("Folder copied successfully.");
  });
};
