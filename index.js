let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeCount = 0
let guestCount = 0

function addOneH(){
    homeCount= homeCount + 1
    homeScore.innerText = homeCount
}
function addTwoH(){
    homeCount= homeCount + 2
    homeScore.innerText = homeCount
}
function addThreeH(){
   homeCount= homeCount + 3
    homeScore.innerText = homeCount 
}


function addOneG(){
    guestCount= guestCount + 1
    guestScore.innerText = guestCount
}
function addTwoG(){
    guestCount= guestCount + 2
    guestScore.innerText = guestCount
}
function addThreeG(){
    guestCount= guestCount + 3
    guestScore.innerText = guestCount
}
// console.log(homeScore)
// console.log(guestScore)
