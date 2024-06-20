
// Show/Hide FAQs answer


// const faqs = document.querySelectorAll('#openBar');
// faqs.forEach(openBar => {
//     openBar.addEventListener('click', () => {
//         openBar.classList.toggle('open');
//     });
//     openBar.addEventListener('click', () => {
//         openBar.classList.toggle('close');
//     });
// });

// openBar.addEventListener("mouseover",()=>{
//     openBar.classList.toggle('open');
// })


var subMenu= document.querySelector("#openBar");

// function openbar(){
// subMenu.classList.toggle("open")
// }

subMenu.addEventListener('click', function(){
    subMenu.classList.toggle("open")
});
