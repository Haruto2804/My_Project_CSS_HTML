const showPopUpSearch = document.getElementById('popUpSearch');
const sidebar = document.getElementById('sidebar');
const textInstagramLogo = document.getElementById('sidebar_text_logo_instagram');
const searchBtn = document.getElementById('popUpSearchBtn');
let isClicked = false;
searchBtn.addEventListener ('click', ()=> {
  isClicked = showPopUpSearch.classList.toggle('showPopUp');
  console.log("isClicked:", isClicked);
})

