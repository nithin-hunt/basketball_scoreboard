let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeLiveScore = 0
let guestLiveScore = 0
function homeAddBy1() {
    homeLiveScore += 1
    homeScore.innerText = homeLiveScore
}
function homeAddBy2() {
    homeLiveScore += 2
    homeScore.innerText = homeLiveScore
}
function homeAddBy3() {
    homeLiveScore += 3
    homeScore.innerText = homeLiveScore
}
function homeSubBy1() {
    homeLiveScore -= 1
    homeScore.innerText = homeLiveScore
}
function homeSubBy2() {
    homeLiveScore -= 2
    homeScore.innerText = homeLiveScore
}
function homeSubBy3() {
    homeLiveScore -= 3
    homeScore.innerText = homeLiveScore
}
function guestAddBy1() {
    guestLiveScore += 1
    guestScore.innerText = guestLiveScore
}
function guestAddBy2() {
    guestLiveScore += 2
    guestScore.innerText = guestLiveScore
}
function guestAddBy3() {
    guestLiveScore += 3
    guestScore.innerText = guestLiveScore
}
function guestSubBy1() {
    guestLiveScore -= 1
    guestScore.innerText = guestLiveScore
}
function guestSubBy2() {
    guestLiveScore -= 2
    guestScore.innerText = guestLiveScore
}
function guestSubBy3() {
    guestLiveScore -= 3
    guestScore.innerText = guestLiveScore
}

function resetScore() {
    homeLiveScore = 0
    guestLiveScore = 0
    homeScore.innerText = homeLiveScore
    guestScore.innerText = guestLiveScore
}