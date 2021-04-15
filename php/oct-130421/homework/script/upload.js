(function showErrors () {

	errors = JSON.parse(errors);

	if (errors.length) {	

		let errorDiv = document.getElementById("error");

		errors.forEach(item=>{
			let detailDiv = document.createElement("div");
			detailDiv.classList.add("detailed-error");
			detailDiv.textContent = item;
			document.getElementById("cover").append(detailDiv);
		});

		errorDiv.style.display = "block";

	} else {
		let successDiv = document.getElementById("success");
		successDiv.style.display = "block";
	}

	setTimeout(()=>{
		window.location.replace("./");
	}, 1000);

})();