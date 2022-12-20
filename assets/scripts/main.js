const controlPX = document.querySelector("#px");
const controlEM = document.querySelector("#em");
const controlREM = document.querySelector("#rem");

const htmlFZ = document.querySelector("#htmlfz");
const emFZ = document.querySelector("#emfz");

const blockPX = document.querySelector(".block__px");
const blockEM = document.querySelector(".block__em");
const blockREM = document.querySelector(".block__rem");

const blockWrapEM = document.querySelector(".block__em__wrap");
const blockWrapREM = document.querySelector(".block__rem__wrap");
const html = document.querySelector("html");

// Handle PXs
controlPX.addEventListener("change", (e) => {
	blockPX.style.width = `${e.target.value}px`;
	blockPX.style.height = `${e.target.value}px`;

	blockPX.innerHTML = `width: ${e.target.value}px; height: ${e.target.value}px`;
});

// Handle EMs
controlEM.addEventListener("change", (e) => {
	blockEM.style.width = `${e.target.value}em`;
	blockEM.style.height = `${e.target.value}em`;

	blockEM.innerHTML = `width: ${e.target.value}em; height: ${e.target.value}em`;
});

// Handle REMs
controlREM.addEventListener("change", (e) => {
	blockREM.style.width = `${e.target.value}rem`;
	blockREM.style.height = `${e.target.value}rem`;

	blockREM.innerHTML = `width: ${e.target.value}rem; height: ${e.target.value}rem`;
});

// Handle control EM font size
emFZ.addEventListener("change", (e) => {
	blockWrapEM.style.fontSize = `${e.target.value}px`;
	blockWrapEM.style.fontSize = `${e.target.value}px`;
});

// Handle control HTML font size
htmlFZ.addEventListener("change", (e) => {
	html.style.fontSize = `${e.target.value}px`;
	html.style.fontSize = `${e.target.value}px`;
});
