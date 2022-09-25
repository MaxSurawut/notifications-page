const notiNumber = document.querySelector('#notinumber')
const clearBtn = document.querySelector('.notification-clear')
const notiContent = document.querySelectorAll('.notification-message-content')
const dots = document.querySelectorAll('.dot')



clearBtn.addEventListener('click',()=>{
    notiNumber.style.display = "none"
    notiContent.forEach((i)=>{
        i.classList.remove('unread')
    })
    dots.forEach((j)=>{
        j.style.display = "none"
    })
})