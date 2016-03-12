function listController() {
	document.title = routes.list.title;
	usersList();
}

function usersList() {
	var preloaderElm = document.getElementById('page-preloader');
	var uri = 'https://api.github.com/users' + '?since=0';

	preloaderElm.style.display = 'block';

	RequestAPI.get(uri, function (data, xhr) {
		var loadedUsers = 0;
		var response = '';

		var loadUsers = function (user, callback) {
			var limitUsers = 10;

			getUser(user, function (userHTML) {
				loadedUsers++;
				response += userHTML;

				if (loadedUsers === limitUsers) {
					return callback(response);
				}

				loadUsers(data[loadedUsers], callback);
			});

		};

		loadUsers(data[0], function (html) {
			document.getElementById('listusers').innerHTML = html;

			console.log('hide preloader');
			preloaderElm.style.display = 'none';
		});


	});

}

function getUser(usersList, callback) {

	var uri = 'https://api.github.com/users/' + usersList.login;

	if (usersList === undefined) {
		var check = confirm('У вас проблемы с сетевым подключением... \n\n Перезагрузить сраницу?');
	}

	if (check == true) {
		window.location.reload();
	}

	RequestAPI.get(uri, function (data, xhr) {

		usersList.email = data.email ? data.email : 'Не указан пользователем';
		usersList.name = data.name ? data.name : 'Не указан пользователем';

		var uri = 'templates/mustache/users-list.html';

		RequestAPI.get(uri, function (dataM, xhr) {
			var rendered = Mustache.render(dataM, {
				json: JSON.stringify(usersList),
				userUrl: usersList.html_url,
				userName: usersList.login,
				userImgUrl: usersList.avatar_url,
				userEmail: usersList.email
			});
			console.log('user loaded');
			callback(rendered);
		});
	});
}


function getValidation(callback) {	
	setTimeout(function () {
		callback(true);
	}, 2000);
	console.log('end getValidation');
}

function saveResultValidation (isValid) {
	console.log(true)
}

getValidation(saveResultValidation);