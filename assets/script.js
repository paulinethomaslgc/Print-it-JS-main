const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

i = 0

let n = slides.length

const bannerContent = document.getElementById("banner")
let bannerImg = document.querySelector(".banner-img")


let bannerTitle = document.querySelector("#banner p")
bannerTitle.innerHTML = `${slides[i].tagLine}`


const arrowLeft = document.querySelector('.arrow_left')
const arrowRight = document.querySelector('.arrow_right')

function slider(i) {
	bannerImg.src = `../assets/images/slideshow/${slides[i].image}`
	bannerTitle.innerHTML = `${slides[i].tagLine}`
}

arrowLeft.addEventListener("click", () => {
	i= i - 1
	if (i < 0) {
		i = i + (n)
	} else if (i === n) {
		i = (i - n)
	}
	slider(i)
	}
)

arrowRight.addEventListener("click", () => {
	i = i + 1
	if (i < 0) {
		i = i + n
	}  else if (i === n) {
		i = (i - n)
	}
	slider(i)
}
)