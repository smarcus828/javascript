const todoList = [];
let HTMLlist = '';

function addToDo(newThing, newdate) {
  todoList.push({name: newThing, dueDate: newdate});
  // console.log(todoList);
}

function displayList() {
  HTMLlist='';
  for (let i = 0; i < todoList.length; i++){
    const name = todoList[i].name;
    const due = todoList[i].dueDate;
    HTMLlist += `<p>
      ${name}
      ${due} 
      <button
        onclick="todoList.splice(${i},1);
        displayList();"
        class="stdbutton deletebutton"
        > Delete </button>
      <p>`
  }
  // console.log(todoList)
  // console.log(HTMLlist);
  document.getElementById('listdisplay').innerHTML = HTMLlist;
}