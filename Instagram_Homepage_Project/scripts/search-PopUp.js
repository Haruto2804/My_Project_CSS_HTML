const showPopUpSearch = document.getElementById('popUpSearch');
const sidebar = document.getElementById('sidebar');
const textInstagramLogo = document.getElementById('sidebar_text_logo_instagram');
const searchBtn = document.getElementById('popUpSearchBtn');

searchBtn.addEventListener ('click', ()=> {
  showPopUpSearch.classList.toggle ('showPopUp');
  
})

