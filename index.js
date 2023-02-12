

function contact (event) {
event.preventDefault();
// emailjs
// .sendForm(
//    'service_g50mz4s',
//    'template_htno2yp',
//    event.target,
//    'i8S2TTkBVPkQgDgXN'
// ).then( () => {
//    console.log('worked1')
// })
const loading = document.querySelector('.model__overlay--loading', '.typewriter')
const success = document.querySelector('.modal__overlay--success')
loading.classList += " modal__overlay--visible"

setTimeout(() => {
    console.log('it worked 1')
}, 1000);
}