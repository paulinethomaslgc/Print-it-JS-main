/***** Début code carrousel *****/

/* tableau contenant les slides et les titres associés : pour rajouter un slide, il suffit d'enregistrer une image dans
	le dossier source (../assets/images/slideshow/)(voir function slider, ligne 56, dans script.js), nommée sous forme 
	"side[i].jpg" (ex : slide5.jpg), et de rajouter l'objet correspondant dans le tableau slides
	(ex : {
		"image":"slide5.jpg",
		"tagLine":"Titre 5 <span> sous-titre 5 </span>"
	}
})*/
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

// crée variable compteur i :
i = 0

// crée variable n, nombre d'éléments dans le tableau slides :
let n = slides.length

// Récupére les éléments div, img et p du html (bannière, titre, flêches) :
const bannerContent = document.getElementById("banner")
let bannerImg = document.querySelector(".banner-img")
let bannerTitle = document.querySelector("#banner p")

const arrowLeft = document.querySelector('.arrow_left')
const arrowRight = document.querySelector('.arrow_right')

// crée le même nombre de span dots que de slides dans le html et leur attribue la classe css ".dot" :
for(let dot of slides) {
	let dot = document.createElement("span")
	const dotsContainer = document.querySelector(".dots")
	dotsContainer.appendChild(dot)
	dot.classList.add("dot")
}

// récupère les span avec la classe CSS ".dot" dans la variable selectedDot :
let selectedDot = document.querySelectorAll('.dot')

// attribue par défaut, la class dot_selected à la span dot d'index i, i étant par défaut égal à zéro (ligne 31) :
selectedDot[i].classList.add("dot_selected")


/* Fonctions */

// force i au retour à la valeur n - 1 s'il atteint -1 (dernière slide) et à la valeur zéro s'il atteint n 
// (première slide), créant ainsi une boucle infinie vers la gouche comme vers la droite :
function infiniteCounter() {
	if (i < 0) {
			i = i + n
		}  else if (i === n) {
			i = 0
		}
}

// crée fonction modification de l'image et du titre en fonction de i :
function slider(i) {
	bannerImg.src = `../assets/images/slideshow/${slides[i].image}`
	bannerTitle.innerHTML = `${slides[i].tagLine}`
	selectedDot[i].classList.add("dot_selected")
}
// ajoute ou enlève la classe "dot_selected" au précédent span "dot" actif en fonction de la valeur de i :
function activeDotLeft() {
	if (i < n-1 && i >=0) {
			selectedDot[i+1].classList.remove("dot_selected")
		} else if (i === n - 1) {
			selectedDot[0].classList.remove("dot_selected")
		}
}

function activeDotRight() {
	if (i < n && i > 0) {
			selectedDot[i-1].classList.remove("dot_selected")
		}
		else if (i === 0) {
			selectedDot[n - 1].classList.remove("dot_selected")
		}
}
/* Déclencheur de fonctions */

// crée les évênements déclenchant les fonctions au clic sur les flêches gauche ou droite :
arrowLeft.addEventListener("click", () => {
	i= i - 1
	infiniteCounter(i)
	slider(i)
	activeDotLeft(i)
	}
)

arrowRight.addEventListener("click", () => {
	i = i + 1
	infiniteCounter(i)
	slider(i)
	activeDotRight(i)
	}
)

/***** Fin code Carrousel *****/