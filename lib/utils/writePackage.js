import fs from "fs";

export default (sourcePkg, name) => {
  const packageData = fs.readFileSync(sourcePkg, "utf8");

  const packageObject = JSON.parse(packageData);

  packageObject.name = name;

  const modifiedPackageData = JSON.stringify(packageObject, null, 2);

  fs.writeFileSync(sourcePkg, modifiedPackageData, "utf8");
};
