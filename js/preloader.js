var Preloader = (function () {
	var preloaderElm = document.getElementById('page-preloader');
	var preloaderStyle = preloaderElm.style;

	return {
		show: function () {
  		preloaderStyle.display = 'block';
		},

		hide: function () {
			preloaderStyle.display = 'none';
		}
	}

})();
