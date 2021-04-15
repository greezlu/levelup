(function setImages () {

	if (!indexer) return;

	indexer = JSON.parse(indexer);

	let main = document.getElementsByTagName("MAIN")[0];

	for (let i=0; i<indexer.length; i++) {

		let curentAmount = document.getElementsByClassName("picture-content").length;

		let content = document.createElement("div");
		content.classList.add("picture-content");

		let source = document.createElement("img");
		source.classList.add("picture-source");

		let name = document.createElement("div");
		name.classList.add("picture-name");

		let span = document.createElement("span");

		if (curentAmount%6 === 0 && i > 0) {
			source.setAttribute("src", "./images/ad.jpg");
			span.textContent = "#ad";
			i--;
		} else {
			source.setAttribute("src", "./uploads/"+indexer[i][0]);
			span.textContent = indexer[i][1];
		}

		content.append(source);
		content.append(name);
		name.append(span);
		main.append(content);

	}

})();