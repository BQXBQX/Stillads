import fs from "fs-extra";
import { promisify } from "util";

const copyAsync = promisify(fs.copy);

export default async (sourceFolder, destinationFolder) => {
  try {
    await copyAsync(sourceFolder, destinationFolder);
    console.log("Folder copied successfully.");
  } catch (error) {
    console.error("Error copying folder:", err);
  }
};
