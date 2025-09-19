const messageBtn = document.getElementById('messagesPopUpBtn')
const myPopUp = document.getElementById('miniPopUp-Messages');
const myCloseBtn = document.getElementById('miniPopUp-Messages-header-CloseBtn')
// const myCloseBtn = document.getElementById ('miniPopUp-Messages-header-CloseBtn');\
let isOpen = false;
messageBtn.addEventListener('click', () => {
  myPopUp.classList.add ('show-popup');
  isOpen=true;
})
myCloseBtn.addEventListener('click', () => {
    myPopUp.classList.remove ('show-popup');
    isOpen = false;
})