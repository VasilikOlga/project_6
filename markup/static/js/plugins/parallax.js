const items = [...document.querySelectorAll('.parallax')];

items.forEach(item => {
	new Parallax(item);
})