/*
Let's save the array of tasks to localStorage (a baby/personal database)
Let's load the array from localStorage on refresh
*/
let genericTask = {
  description: "Make a to-do app",
  isDone: false
};

let stateUpdater = ()=>{
  localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
  renderTasks(arrayOfTasks, "#fake");
}

let arrayOfTasks = [
  genericTask,
  {description: "Go make little apps quickly", isDone: false},
  {description: "Make the world a little better today", isDone: true}
];

//comment here

let oldTasks = localStorage.getItem("tasks");
if (!!oldTasks){
  arrayOfTasks = JSON.parse(oldTasks);
}


let renderTask = (aTask, parentSelector)=>{
  let $el = $(`
<h1 class="${aTask.isDone ? "strikethrough": ""}">${aTask.description}</h1>
`);
  $(parentSelector).append($el);
  $el.on("click", ()=>{
    aTask.isDone = !aTask.isDone;
    stateUpdater();
  })
}

let renderTasks = (arrTasks, parentSelector)=>{
  $(parentSelector).html(`
<div class="todos"></div>
  `);
  arrTasks.map(aTask=>{ 
     renderTask(aTask, ".todos");
  })
}

renderTasks(arrayOfTasks, "#fake");