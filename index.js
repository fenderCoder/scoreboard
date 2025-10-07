// Scores
let num1 = 0;
let num2 = 0;
document.getElementById("homeTeam").textContent = num1;
document.getElementById("guestTeam").textContent = num2;

function addOneHome() {
	let result = (num1 += 1);
	document.getElementById("homeTeam").textContent = result;
}

function addTwoHome() {
	let result = (num1 += 2);
	document.getElementById("homeTeam").textContent = result;
}

function addThreeHome() {
	let result = (num1 += 3);
	document.getElementById("homeTeam").textContent = result;
}

function addOneGuest() {
	let result = (num2 += 1);
	document.getElementById("guestTeam").textContent = result;
}

function addTwoGuest() {
	let result = (num2 += 2);
	document.getElementById("guestTeam").textContent = result;
}

function addThreeGuest() {
	let result = (num2 += 3);
	document.getElementById("guestTeam").textContent = result;
}

// Reset button
function resetAll() {
	num1 = 0;
	num2 = 0;
	document.getElementById("homeTeam").textContent = num1;
	document.getElementById("guestTeam").textContent = num2;
}
