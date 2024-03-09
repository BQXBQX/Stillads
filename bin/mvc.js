#! /usr/bin/env node

import { program } from 'commander'
import { readFileSync } from 'fs'
import create from '../lib/create.js'

const pkg = JSON.parse(readFileSync('package.json', 'utf-8'))

program
  .version(`Stillads ${pkg.version}`)
  .usage('<command> [option]')
  .name('Stillads')
  .command('create <name>')
  .action((name) => {
    create(name)
  })

program.parse()
