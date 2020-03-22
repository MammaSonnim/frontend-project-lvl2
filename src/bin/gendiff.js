#!/usr/bin/env node
import program from 'commander';
import { version } from '../../package.json';

program
  .arguments('')
  .version(version)
  .description('Compares two configuration files and shows a difference.');

program.parse(process.argv);
