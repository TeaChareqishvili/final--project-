// first section 
const slideShow = document.querySelectorAll('.hide');
let currentImageCounter = 0;

slideShow[currentImageCounter].style.display ="block";
//   setInterval(nextImage, 5000);

function nextImage(){
    slideShow[currentImageCounter].style.display ="none";
    currentImageCounter= (currentImageCounter + 1)%(slideShow.length - 1);
    slideShow[currentImageCounter].style.display ="block";
}

const skills = document.querySelector('.skills');
const Design = document.getElementById('Design');
const Photography = document.getElementById('Photography');
const Marking = document.getElementById('Marking');
const Photoshop = document.getElementById('Photoshop');

window.addEventListener('scroll', () => {
    if(skills.getBoundingClientRect().top <= 400) {
        console.log('start animation')
        Design.style.width = 80 + "%"
        Photography.style.width = 50 + "%"
        Marking.style.width = 65 + "%"
        Photoshop.style.width = 30 + "%"
    }
})


//Progress bar animation
//end percent 
//initial percent
// const percentage = document.querySelector('.progress').innerHTML;
// const percent = document.querySelector('.progress');
// const initialPercent = 0;
// let progress = 0;

// const animate = (per, item)=> {
//     if(progress == per) {
//         window.removeEventListener('scroll')
//         // clearInterval(loading)
//     }else {
//         progress++
//         console.log(item)
//         item.style.width = progress + "%"
//     }
// }

// const handleLoading = (percentage, id  ) => {
//     console.log('?')
//     const item = document.getElementById(`${id}`);
//     setInterval(() => {
//             console.log('oe')
//             animate(percentage, item)
           
//         }, 100)
//     console.log({item})
// }

// const body = document.querySelector('.html');

// window.addEventListener('scroll', () => {
//     console.log('alloooo')
// //    if( window.scrollTop > 50) {
// //     console.log('alloooo2')

//         handleLoading(80, 'Design')
//         handleLoading(50, 'Photography')
//         handleLoading(30, 'Marking')
//         handleLoading(65, 'Photoshop')
//     // }
// })



// handleLoading(80, 3)