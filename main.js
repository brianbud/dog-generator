const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all'

const select = document.querySelector('.breeds')

fetch(BREEDS_URL)
    .then(response => {
        return response.json();
    })
    .then(data => {
        const breedsObject = data.message; //Turn message into object
        const breedsArray = Object.keys(breedsObject) //Turn object to array
        for (let i = 0; i < breedsArray.length; i++) {
            const option = document.createElement('option') // creates <option></option>
            option.value = breedsArray[i] //<option value = 'breed'>
            option.innerText = breedsArray[i]
            select.appendChild(option) //adds current <option> to select
        }

    })

select.addEventListener('change', event => {
    let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`
    getDogImg(url)
})

const img = document.querySelector('.dog-img')

const getDogImg = url => {
    fetch(url) //gets API url above
        .then(response => {
            return response.json(); //getJSON msg back
        })
        .then(data => {
            img.src = data.message; //extract message from JSON and attach to img
        })
}