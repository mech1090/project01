
let theme = true

console.dir(document)
const body = document.querySelector('body')
const h1 = document.createElement('h1')
h1.textContent = ' Hello world'
body.appendChild(h1)


const btn = document.createElement('button')
btn.textContent = 'Dark mode'
body.appendChild(btn)

btn.addEventListener('click', ()=>{
    if(theme){
        body.style.backgroundColor='black'
        h1.style.color='white'
    }
    else{
        body.style.backgroundColor='white'
        h1.style.color='black'
    }
    theme = !theme
})