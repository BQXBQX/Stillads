#! /usr/bin/env node

import { program } from "commander";
import { readFileSync } from "fs";
import create from "../lib/create.js";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const currentFolderPath = path.dirname(__filename);
const pkgPath = path.resolve(currentFolderPath, "../package.json");

const pkg = JSON.parse(readFileSync(pkgPath, "utf-8"));

program
  .version(`Stillads ${pkg.version}`)
  .usage("<command> [option]")
  .name("Stillads")
  .action(() => {
    create();
  });

program.parse();
