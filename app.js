 const boxToCircle = () => {
  let square = document.querySelector('.box')
  square.classList.toggle('circle')
}

const boxToBio =() => {
  let square = document.querySelector('.box')
  square.classList.toggle('bio')
}

const showCircle =() => {
  boxToCircle()
  let newbox = document.querySelector('.circle')
  newbox.innerHTML = "This Represents Cirlce"
}

const hideImage =() => {
  let target = document.querySelector('.kevinHart')
  target.classList.toggle('disappear')
  let btn = document.querySelector('.hidden')
  btn.innerHTML ="show me"
}
