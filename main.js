// first section 
const slideShow = document.querySelectorAll('.hide');
let currentImageCounter = 0;

 slideShow[currentImageCounter].style.display ="block";
// slideShow[currentImageCounter].style.opacity=1;
//  setInterval(nextImage, 1000);

function nextImage(){
     slideShow[currentImageCounter].style.display ="none";
    // slideShow[currentImageCounter].style.opacity=0;
    currentImageCounter= ( currentImageCounter + 1)%(slideShow.length - 1);
     slideShow[currentImageCounter].style.display ="block";
    // slideShow[currentImageCounter].style.opacity=1;
}


const skillCards = document.querySelectorAll('.skill-cards');

// skillCards.addEventListener('mouseenter', ()=>{
//     card.classList.remove('card');
//       card.classList.add('hide');
//       backCard.classList.remove('back-card');
//       backCard.classList.add('back');
// })

// section 3//



//  skillCards.forEach(e =>{
//     e.addEventListener('mouseenter',()=>{
//         const card = document.querySelector('.card');
//         const backCard = document.querySelector('.back-card');
//         card.classList.remove('card');
//         card.classList.add('hide');
//        backCard.classList.remove('back-card');
//        backCard.classList.add('back');
//     })
  
//  })




//  skillCards.forEach(e=>{
//     e.addEventListener('mouseleave', ()=>{
//         const card = document.querySelectorAll('.card');
//         const backCard = document.querySelectorAll('.back-card');
//         backCard.classList.remove('back');
//         backCard.classList.add('back-card');
//         card.classList.remove('hide');
//         card.classList.add('card');
//        })
//  })

// console.log(backCard);

// console.log(card);
// card.addEventListener('mouseenter', ()=>{
//     card.classList.remove('card');
//     card.classList.add('hide');
//     backCard.classList.remove('hide');
//     backCard.classList.add('back');
// })

// card.addEventListener('mouseleave', ()=>{
//     backCard.classList.remove('back');
//     backCard.classList.add('hide');
//     card.classList.remove('hide');
//     card.classList.add('card');
   
// })

    // const card = document.querySelectorAll('.item-1, .item-2').forEach(item=>{
    //     item.addEventListener('mouseenter', ()=>{
    //         // item.classList.remove('card');
    //          item.classList.add('hide');    
    //         //  item.classList.remove('back-card');
    //         item.classList.add('back');
            
    //     })
    // });



    // const backCard = document.querySelectorAll('.back-card').forEach(items =>{
    //     items.addEventListener('mouseenter',()=>{
    //         items.classList.remove('back-card');
    //         items.classList.add('back');
    //        console.log("jhadb")
    //     })
        
    // })








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