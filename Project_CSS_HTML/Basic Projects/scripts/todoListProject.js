const addBtnElement = document.querySelector('.addBtn')
const dateInputElement = document.querySelector('.dateInput')
const nameInputElement = document.querySelector('.nameInput')
const renderSectionElement = document.querySelector('.todo-Grid2');
const deleteAllElement = document.querySelector('.deleteAll');
deleteAllElement.addEventListener('click',()=> {
  const todoJSON = localStorage.getItem('todo');
  let todoData = JSON.parse(todoJSON);
  todoData = [];
  localStorage.setItem('todo',JSON.stringify(todoData));
  renderTodoList();
})
addBtnElement.addEventListener('click',()=> {
  addToDoList();
  renderTodoList();
  nameInputElement.value = '';
  dateInputElement.value = '';
});
document.addEventListener('keydown',(e)=> {
  if(e.key === 'Enter') {
    addToDoList();
    renderTodoList();
    nameInputElement.value = '';
    dateInputElement.value = '';
  }
})
function addToDoList () {
  let todoData = [];
  let todo = {
    name: nameInputElement.value,
    date: dateInputElement.value
  }
  if((todo.name ==='' && todo.date ==='') || todo.name ==='' || todo.date === '') {
  alert('Hãy nhập todo hợp lệ!');
  return;
  }

  const todoJSON = localStorage.getItem('todo');
  if(todoJSON) {
    let todoData = JSON.parse(todoJSON);
    todoData.push(todo);
    localStorage.setItem('todo',JSON.stringify(todoData));
    return;
  }
  todoData.push(todo);
  localStorage.setItem('todo',JSON.stringify(todoData));
}
function renderTodoList() {
  const todoJSON = localStorage.getItem('todo');
  let todoData = JSON.parse(todoJSON);
  let html = '';
  for(let i = 0 ; i<todoData.length;i++) {
    const todo = todoData[i];
    html += `
    <p class = "todoName">${todo.name}</p>
    <p class = "todoDate">${todo.date}</p>
    <button class = "deleteBtn" data-index = "${i}">Delete</button>
    `
  }
  renderSectionElement.innerHTML = html;
  handleDeleteBtn();
}
renderTodoList();
deleteBtnElement.forEach(deleteB => {
  deleteB.addEventListener('click',(e)=> {
    console.log('Nut ban vua nhan la:',e.target.dataset.index);
  })
});
function handleDeleteBtn () {
  const deleteBtnElement = document.querySelectorAll('.deleteBtn');
  deleteBtnElement.forEach(btn => {
    btn.addEventListener('click',(e)=> {
      deleteBtn(e.target.dataset.index)
    })
  })
}
function deleteBtn (indexDelete) {
  const todoJSON = localStorage.getItem('todo');
  let todoData = JSON.parse(todoJSON);
  todoData.splice(indexDelete,1);
  localStorage.setItem('todo',JSON.stringify(todoData));
  renderTodoList();
}