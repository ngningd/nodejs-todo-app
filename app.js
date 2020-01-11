const yargs = require('yargs');
const chalk = require('chalk');

yargs.version('1.0.0');

yargs.command({
    command: 'list' ,
    discribe: 'List all todo.' ,
    handler() {
        console.log(chalk.yellow.bgBlue('Listing...'));
    }
});

const argv = yargs.argv;

