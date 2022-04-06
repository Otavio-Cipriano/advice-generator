const adviceTextEl = document.querySelector('.advice-text')
const adviceIdEl = document.querySelector('.advice-id')

const diceBtn = document.querySelector('.dice')
const diceSvg = document.querySelector('.dice-object')

window.addEventListener('load', async () =>{
    let advice = await getAdvice()
    setNewAdvice(advice)
})

diceBtn.addEventListener('click', async()=>{
    let advice = await getAdvice()
    setNewAdvice(advice)
})

diceSvg.addEventListener('click', async()=>{
    let advice = await getAdvice()
    setNewAdvice(advice)
})



async function getAdvice() {
    let data = await fetch(`https://api.adviceslip.com/advice`)
    let json = await data.json()
    return json.slip;
}



function setNewAdvice(advice){
    adviceTextEl.innerHTML = `"${advice.advice}"`
    adviceIdEl.innerHTML = `Advice #${advice.id}`
}