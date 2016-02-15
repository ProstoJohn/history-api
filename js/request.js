var RequestAPI = (function () {
	
	var sendRequest = function (method, uri, callback) {
		var xhr = new XMLHttpRequest();
		var data;

	  xhr.open(method, uri);
	  xhr.send();

	  xhr.onreadystatechange = function () {
	    if (xhr.readyState !== 4) return;

	    try {
	    	data = JSON.parse(xhr.responseText);
	    } catch (error) {
	    	console.log(error);
	    	data = xhr.responseText;
	    }

	    callback(data, xhr);
	  };

	};

	return {

		get: function (uri, callback) {
			sendRequest('GET', uri, callback);
		},

		post: function (uri, callback) {
			sendRequest('POST', uri, callback);
		},

		send: sendRequest

	}

})();
