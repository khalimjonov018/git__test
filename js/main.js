const navAnimation = () => {
	const barsEL = document.querySelector(".bars");
	const navbarLS = document.querySelector(".navbar__list");
	barsEL.addEventListener("click", () => {
		navbarLS.classList.toggle("active");
  barsEL.classList.toggle("toggle");
	});
};
navAnimation();
