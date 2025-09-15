const messageBtn = document.getElementById('messagesPopUpBtn')
const myPopUp = document.getElementById('miniPopUp-Messages');
const myCloseBtn = document.getElementById('miniPopUp-Messages-header-CloseBtn')
// const myCloseBtn = document.getElementById ('miniPopUp-Messages-header-CloseBtn');
console.log(messageBtn);
console.log(myPopUp)
console.log(myCloseBtn)
messageBtn.addEventListener('click', () => {
  myPopUp.style.display = 'flex';
})
myCloseBtn.addEventListener('click', () => {
  myPopUp.style.display = 'none';
})