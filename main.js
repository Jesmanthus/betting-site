const mobile = window.matchMedia("screen and (max-width: 767px)")
const yumeko = document.getElementById("yumeko-article")
const mary = document.getElementById("mary-article")
const kirari = document.getElementById("kirari-article")
const waifus = document.querySelectorAll(".waifu")


if (mobile.matches) {

  for (let i = 0; i < waifus.length; i++) {
    waifus[i].classList.add("animate__fadeInUp")
  }

} else {

  yumeko.classList.add("animate__fadeInLeft")
  mary.classList.add("animate__fadeInUp")
  kirari.classList.add("animate__fadeInRight")

}


