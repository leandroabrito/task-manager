const fs = require('fs');

const addTask = function(title, description){
  const tasks = loadAllTasks()

  const dupes = tasks.find(function(task) {
    return task.title === title
  })


  if(!dupes){
    const newTask = {
      title,
      description
    }
    tasks.push(newTask);
    saveTask(tasks);
    console.log(`task ${title} has been added`);
  }else {
    console.log('duplicated task');
  }
}

const removeTask = function(title) {
  const tasks = loadAllTasks();
  const tasksToKeep = tasks.filter(function(task){
    return task.title !== title
  });
  saveTask(tasksToKeep);
  console.log(`task ${title} has been removed`);
}

const saveTask = function(task){
  const taskJSON = JSON.stringify(task);
  fs.writeFileSync('tasks.json', taskJSON);
}

const loadAllTasks = function(){
  try {
    const tasks = fs.readFileSync('tasks.json');
    return JSON.parse(tasks.toString());
  } catch(error) {
    return []
  }
}


module.exports = {
  addTask,
  removeTask,
  loadAllTasks,
}
