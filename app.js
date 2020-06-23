const yargs = require('yargs');

yargs.command({
  command: 'add',
  describe: 'add a task',
  builder: {
    title: {
      describe: 'task title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv){
    console.log(`adding task -> ${argv.title}`);
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
