(function () {
	var mainNav = document.getElementById('main-nav');
	var toggleButton = document.getElementById('toggle-button');
	// helllo comment
	toggleButton.addEventListener('click', function(event){
		mainNav.classList.toggle('hide-nav');
	})
	document.body.addEventListener('click', function(e){
		if (e.target !== mainNav && e.target !== toggleButton) {
			if (!mainNav.classList.contains('hide-nav')) {
				mainNav.classList.toggle('hide-nav');
			}
		}

	}, false)
})()
