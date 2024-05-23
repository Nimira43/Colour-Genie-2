const colours = ['gold', 'sienna', 'red', 'rgba(133, 122, 200)', 'beige', 'orangered', 'teal', 'goldenrod', '#111', 'darkred', '#333', '#eee', '#ccc', 'forestgreen', 'skyblue']
const btn = document.getElementById('btn')
const colour = document.querySelector('.colour')

const getRandomNumber = () => {
    return Math.floor(Math.random() * colours.length)
}

btn.addEventListener('click', () => {
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colours[randomNumber]
    colour.textContent = colours[randomNumber]
})