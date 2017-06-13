(function(document){
	var mainNav = document.getElementById('main-nav');
	var toggleButton = document.getElementById('toggle-button');

	toggleButton.addEventListener('click', function(){
		mainNav.classList.toggle('hide-nav');
	})
})(document)