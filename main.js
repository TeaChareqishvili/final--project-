// first section 
const slideShow = document.querySelectorAll('.hide');
let currentImageCounter = 0;

slideShow[currentImageCounter].style.display ="block";
   setInterval(nextImage, 5000);

function nextImage(){
    slideShow[currentImageCounter].style.display ="none";
    currentImageCounter= (currentImageCounter + 1)%(slideShow.length);
    slideShow[currentImageCounter].style.display ="block";
}

const skills = document.querySelector('.skills');
const Design = document.getElementById('Design');
const Photography = document.getElementById('Photography');
const Marking = document.getElementById('Marking');
const Photoshop = document.getElementById('Photoshop');

window.addEventListener('scroll', () => {
    if(skills.getBoundingClientRect().top <= 400) {
        // console.log('start animation')
        Design.style.width = 80 + "%"
        Photography.style.width = 50 + "%"
        Marking.style.width = 65 + "%"
        Photoshop.style.width = 30 + "%"
    }
})

