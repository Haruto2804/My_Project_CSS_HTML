const videoPosts = document.querySelectorAll('.post__video');

videoPosts.forEach(video=> {
  video.addEventListener('click',()=> {
    if(video.paused) {
      // trước khi chơi video này thì phải dừng các video khác
      // duyệt tất cả các video khác, nếu không phải video hiện tại
      //đang chơi thì dừng nó
      videoPosts.forEach(v=> {
        if(v !==videoPosts) { // video khác ko phải là video hiện tại
          v.pause();
        }
        video.play(); // sau khi dừng tất cả video khác thì chơi video hiện tại
      })
    }else { // nếu video đang chơi mà click thì dừng
      video.pause();
    }
  })
})