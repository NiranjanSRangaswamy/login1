const buttons = document.querySelectorAll('.ghost');
const glider = document.querySelector('.glider');
const form = document.querySelector('.form-container')

document.querySelectorAll('.form-container .button').forEach((button)=>{
    button.addEventListener('click',e=>e.preventDefault())
})


buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        glider.classList.toggle('active')
        form.classList.toggle('active')
    })
})