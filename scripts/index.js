//slider movement cards
review = document.querySelectorAll('.review');

let active = Math.floor((review.length)/2);
function loadShow() {
    let stt = 0;
    review[active].style.transform = `none`;
    review[active].style.zIndex =  3;
    review[active].style.fliter = 'none';
    review[active].style.opacity = 1;

    for(var i = active + 1; i < review.length; i++)    {
        stt++;
        review[i].style.transform = `translateX(${220*stt}px) scale(${1-0.2*stt}) perspective(16px)`;
        review[i].style.zIndex = -stt + 2;
        review[i].style.fliter = `blur(1px)`;
        review[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for(var i = active - 1; i >= 0; i--)    {
        stt++;
        review[i].style.transform = `translateX(${-220*stt}px) scale(${1-0.2*stt}) perspective(16px)`;
        review[i].style.zIndex = -stt + 2;
        review[i].style.fliter = `blur(1px)`;
        review[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}

loadShow();
next.onclick = function() {
    active = active + 1 < review.length ? active + 1 : active;
    loadShow();
  }
  
  prev.onclick = function() {
    active = active - 1 >= 0 ? active -1 : active;
    loadShow();
  }