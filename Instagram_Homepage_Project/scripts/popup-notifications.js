const showPopUpNotifications = document.getElementById('popUpNotifications');
const notificationBtn = document.getElementById('notificationBtn');
notificationBtn.addEventListener ('click', ()=> {
  showPopUpNotifications.classList.toggle ('showPopUp');
})

