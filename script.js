
const body = document.querySelector ('body')
const box = document.querySelector ('.box')
const image = document.querySelector ('img')
const item1 = document.querySelector ('h1')

const name = document.querySelector ('.box h1 span')
const surname = document.querySelector ('.box h2 span')

// const qu1 = prompt ('укажите цвет фона')
// const qu2 = prompt ('укажите цвет фона бокса')
const qu3 = +prompt ('укажите ширину бокса')
const qu4 = prompt ('укажите ссылку на картинку')
const qu5 = prompt ('укажите ваше имя')
const qu6 = prompt ('укажите ваше фамилию')






// body.style.backgroundColor = qu1 
// box.style.backgroundColor = qu2
box.style.width = qu3 + 'px'
image.src = qu4
name.innerText = qu5 
surname.innerText = qu6