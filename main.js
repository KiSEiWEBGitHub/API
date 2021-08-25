let title_blague = document.getElementById('header')
let blague = document.getElementById('content')



function getJoke(){
    fetch("https://api.blablagues.net/?rub=blagues").then((r) => r.json()).then((data) => {
        console.log(data.data.content)
        const joke = data.data.content
        title_blague.textContent = joke.text_head
        blague.textContent = joke.text !== "" ? joke.text : joke.text_hidden
    })

}
getJoke()
document.body.addEventListener('click', getJoke)

