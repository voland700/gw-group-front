// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	document.getElementById('topMenu').addEventListener('click', function(event){
		event.preventDefault();
		let topMenu = event.currentTarget;
		let topMenuBtnIcon = document.getElementById('topMenuBtnIcon');
		topMenuBtnIcon.classList.toggle('icon-list2');
		topMenuBtnIcon.classList.toggle('icon-cross');

		if(topMenu.classList.contains('closed')){
			topMenu.classList.remove('closed');
			topMenu.classList.add('opened');
			return false;
		}
		if(topMenu.classList.contains('opened')){
			topMenu.classList.remove('opened');
			topMenu.classList.add('closed');
			return false;
		}
	});



	$('.slider').owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		autoplayHoverPause: true,
		//autoplay: true,
		animateOut: 'fadeOut'
		}
	);

		/*--same-hight-bloks-main-page--*/
	if(document.querySelector('.advice_item'))	{
		funcItemsHeight()
		function funcItemsHeight() {
			var menuItems = document.querySelectorAll('.advice_item');
			var top = menuItems[0].offsetTop;
			var arrHeight = [];
			var arrItems = [];
			for (var i = 0; i < menuItems.length; i++) {
				menuItems[i].style.height = 'auto';
			}
			for (var i = 0; i < menuItems.length; i++) {
				if (top != menuItems[i].offsetTop) {
					arrHeight.sort(function (a, b) { return b - a });
					for (var j = 0; j < arrItems.length; j++) {

						arrItems[j].style.height = arrHeight[0] + 'px';
					}
					top = menuItems[i].offsetTop;
					arrHeight.length = arrItems.length = 0;
					i = i - 1;
					continue;
				}
				arrHeight[arrHeight.length] = menuItems[i].offsetHeight;
				arrItems[arrItems.length] = menuItems[i];
			}
			arrHeight.sort(function (a, b) { return b - a });
			for (var j = 0; j < arrItems.length; j++) {
				arrItems[j].style.height = arrHeight[0] + 'px';
			}
		}
		window.onresize = funcItemsHeight
	}


	/*--tabs--*/
	document.querySelectorAll('.advice_top_item').forEach(function (elem) {
		elem.addEventListener('click', function (item) {
			let elemSelected = item.target.parentElement;
			let nameAttr = elemSelected.dataset.advice;
			let nameList = document.querySelectorAll('.advice_top_item');
			let tabsList;
			if (!elemSelected.classList.contains('clicked')) {
				nameList.forEach(function (name) {
					if (name.classList.contains('clicked')) name.classList.remove('clicked');
				});
				elemSelected.classList.add('clicked');
				tabsList = document.querySelectorAll('.advice_prodact_wrap');
				tabsList.forEach(item => {
					item.dataset.tab == nameAttr ? item.classList.add('behold') : item.classList.remove('behold');
				})
			}
		});
	});

	/*--brands curuse--*/
	$('.brands_curusel').owlCarousel({
	loop: true,
	margin: 10,
	nav: true,
	dots: false,
	navContainerClass: 'brends-owl-nav',
	responsive: {
		0: {
			items: 1
		},
		400: {
			items: 2
		},
		600: {
			items: 3
		},
		1000: {
			items: 5
		}
	}
})

























})