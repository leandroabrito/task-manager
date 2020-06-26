const fs = require('fs');

const addTask = function(title, description){
  const tasks = loadAllTasks()

  const newTask = {
    title,
    description
  }

  tasks.push(newTask);

  saveTask(tasks);
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
  addTask
}
