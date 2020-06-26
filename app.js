const yargs = require('yargs');
const task = require('./task');

yargs.command({
  command: 'add',
  describe: 'add a task',
  builder: {
    title: {
      describe: 'task title',
      demandOption: true,
      type: 'string'
    },
    description: {
      describe: 'task description',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv){
    task.addTask(argv.title, argv.description);
    // console.log('adding the following task:');
    // console.log(`title -> ${argv.title}`);
    // console.log(`decription -> ${argv.description}`);
  }
});

yargs.command({
  command: 'remove',
  describe: 'remove a task',
  handler: function(){
    console.log('removing a task');
  }
});

yargs.command({
  command: 'list',
  describe: 'list tasks',
  handler: function(){
    console.log('listing tasks');
  }
});

yargs.command({
  command: 'read',
  describe: 'read a task',
  handler: function(){
    console.log('reading a task');
  }
});


// console.log(yargs.argv);
yargs.parse();
