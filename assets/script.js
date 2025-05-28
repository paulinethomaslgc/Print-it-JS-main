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

// créer compteur i
i = 0
// créer variable n, nombre d'éléments dans le tableau slides
let n = slides.length

// Récupérer les éléments div, img et p du html
const bannerContent = document.getElementById("banner")
let bannerImg = document.querySelector(".banner-img")


let bannerTitle = document.querySelector("#banner p")
bannerTitle.innerHTML = `${slides[i].tagLine}`


const arrowLeft = document.querySelector('.arrow_left')
const arrowRight = document.querySelector('.arrow_right')

//créer fonction modification de l'image et du titre en fonction de i
function slider(i) {
	bannerImg.src = `../assets/images/slideshow/${slides[i].image}`
	bannerTitle.innerHTML = `${slides[i].tagLine}`
}
// créer le même nombre de span dots que de slides dans le html et leur attribuer la classe css .dot
for(let dot of slides) {
	let dot = document.createElement("span")
	const dotsContainer = document.querySelector(".dots")
	dotsContainer.appendChild(dot)
	dot.classList.add("dot")
}
//récupère les span avec la classe .dot dans la variable selectedDot
let selectedDot = document.querySelectorAll('.dot')
//attribue par défaut, la class dot_selected à la span dot d'index i, i étant par défaut égal à zéro
selectedDot[i].classList.add("dot_selected")
//créer les évênements clic déclenchant la fonction slider et le compteur
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