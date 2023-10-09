const todoList = [];
let HTMLlist = '';

function addToDo(newThing) {
  todoList.push(newThing);
  console.log(todoList);
}

function displayList() {
  HTMLlist='';
  for (let i = 0; i < todoList.length; i++){
    HTMLlist += `<p>${todoList[i]} 
      <button 
        class="stdbutton deletebutton"
      > Delete </button><p>`
  }
  console.log(todoList)
  console.log(HTMLlist);
  document.getElementById('listdisplay').innerHTML = HTMLlist;
}