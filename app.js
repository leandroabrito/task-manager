const yargs = require('yargs');

yargs.command({
  command: 'add',
  describe: 'add a task',
  handler: function(){
    console.log('adding a task');
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


console.log(yargs.argv);
