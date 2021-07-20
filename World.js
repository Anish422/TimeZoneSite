setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()

setInterval(setClock2, 1000)

const hourHand2 = document.querySelector('[data-hour-hand2]')
const minuteHand2 = document.querySelector('[data-minute-hand2]')
const secondHand2 = document.querySelector('[data-second-hand2]')

function setClock2() {
  const currentDate = new Date()
  const secondsRatio2 = currentDate.getSeconds() / 60
  const minutesRatio2 = (secondsRatio2 + currentDate.getMinutes()) / 60
  const hoursRatio2 = (minutesRatio2 + currentDate.getHours() +5) / 12
  setRotation(secondHand2, secondsRatio2)
  setRotation(minuteHand2, minutesRatio2)
  setRotation(hourHand2, hoursRatio2)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock2()

setInterval(setClock3, 1000)

const hourHand3 = document.querySelector('[data-hour-hand3]')
const minuteHand3 = document.querySelector('[data-minute-hand3]')
const secondHand3 = document.querySelector('[data-second-hand3]')

function setClock3() {
  const currentDate = new Date()
  const secondsRatio3 = currentDate.getSeconds() / 60
  const minutesRatio3 = (secondsRatio3 + currentDate.getMinutes()) / 60
  const hoursRatio3 = (minutesRatio3 + currentDate.getHours() +14) / 12
  setRotation(secondHand3, secondsRatio3)
  setRotation(minuteHand3, minutesRatio3)
  setRotation(hourHand3, hoursRatio3)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock3()

setInterval(setClock4, 1000)

const hourHand4 = document.querySelector('[data-hour-hand4]')
const minuteHand4 = document.querySelector('[data-minute-hand4]')
const secondHand4 = document.querySelector('[data-second-hand4]')

function setClock4() {
  const currentDate = new Date()
  const secondsRatio4 = currentDate.getSeconds() / 60
  const minutesRatio4 = (secondsRatio4 + currentDate.getMinutes()) / 60
  const hoursRatio4 = (minutesRatio4 + currentDate.getHours() +13) / 12
  setRotation(secondHand4, secondsRatio4)
  setRotation(minuteHand4, minutesRatio4)
  setRotation(hourHand4, hoursRatio4)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock4()

setInterval(setClock5, 1000)

const hourHand5 = document.querySelector('[data-hour-hand5]')
const minuteHand5 = document.querySelector('[data-minute-hand5]')
const secondHand5 = document.querySelector('[data-second-hand5]')

function setClock5() {
  const currentDate = new Date()
  const secondsRatio5 = currentDate.getSeconds() / 60
  const minutesRatio5 = (secondsRatio5 + currentDate.getMinutes()) / 60
  const hoursRatio5 = (minutesRatio5 + currentDate.getHours()-3) / 12
  setRotation(secondHand5, secondsRatio5)
  setRotation(minuteHand5, minutesRatio5)
  setRotation(hourHand5, hoursRatio5)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock5()

setInterval(setClock6, 1000)

const hourHand6 = document.querySelector('[data-hour-hand6]')
const minuteHand6 = document.querySelector('[data-minute-hand6]')
const secondHand6 = document.querySelector('[data-second-hand6]')

function setClock6() {
  const currentDate = new Date()
  const secondsRatio6 = currentDate.getSeconds() / 60
  const minutesRatio6 = (secondsRatio6 + currentDate.getMinutes()+30) / 60
  const hoursRatio6 = (minutesRatio6 + currentDate.getHours() +9) / 12
  setRotation(secondHand6, secondsRatio6)
  setRotation(minuteHand6, minutesRatio6)
  setRotation(hourHand6, hoursRatio6)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock6()


