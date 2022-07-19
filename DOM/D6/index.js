
const tasklist=[];
const addtask = () => {
  const name = document.getElementById("name").value;
  console.log(name);
  const tempObj ={
    id:Date.now(),
    taskName:name
  }
  tasklist.push(tempObj);
  console.log(tasklist);
  addtaskonscreen()
}

function addtaskonscreen(){
  const element = document.createElement("div");
  element.setAttribute("class","child");
  const existingelement = document.getElementById("parent");
  existingelement.appendChild(element);
  element.innerText = tasklist[tasklist.length-1].taskName;
}
