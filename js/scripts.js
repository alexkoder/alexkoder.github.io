(function() {

var popupClose 	= document.querySelector('.popup-close-btn'),
	 screenOverlay = document.querySelector('.screen-overlay'),
	 itemLinks		= document.querySelectorAll('.item-link'),
	 curPopup		= null;

for (var i = 0; i < itemLinks.length; ++i) {
	itemLinks[i].addEventListener('click', function(event) {
		event.preventDefault();	
		curPopup = this.nextElementSibling;
		screenOverlay.style.display = 'block';
		curPopup.style.display = 'block';
		popupClose.style.display = 'block';
		window.addEventListener('keydown', closePopupByEscape);
	});
}

popupClose.addEventListener('click', function(event) {
	event.preventDefault();
	closePopup();
});

function closePopupByEscape(event) {
	if (event.keyCode === 27) {
		closePopup();
	}
	console.log('ewew');
}

function closePopup() {
	screenOverlay.style.display = 'none';	
	popupClose.style.display = 'none';
	if (curPopup)
		curPopup.style.display = 'none';
	window.removeEventListener('keydown', closePopupByEscape);
}

}());