const fs = require('fs');

const addTask = function(title, description){
  const tasks = loadAllTasks()
  console.log(tasks)
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
