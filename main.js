// first section 
const slideShow = document.querySelectorAll('.hide');
let currentImageCounter = 0;

 slideShow[currentImageCounter].style.display ="block";
// slideShow[currentImageCounter].style.opacity=1;
//    setInterval(nextImage, 2000);

function nextImage(){
     slideShow[currentImageCounter].style.display ="none";
    // slideShow[currentImageCounter].style.opacity=0;
    currentImageCounter= ( currentImageCounter+1)%slideShow.length;
     slideShow[currentImageCounter].style.display ="block";
    // slideShow[currentImageCounter].style.opacity=1;
}

