function listController() {
  document.title = routes.list.title;
  usersList();
}

function usersList() {
  var preloaderElm = document.getElementById('page-preloader');
  var uri = 'https://api.github.com/users' + '?since=0';

  preloaderElm.style.display = 'block';

  //  var requestValue = prompt("Сколько пользователей вам необходимо получить?");
  //  if (requestValue == 0 || requestValue > 30) {
  //    alert("Количество запросов не может быть равно 0 и быть больше 30");
  //    location.reload();
  //  }

  RequestAPI.get(uri, function (data, xhr) {
    var APIData = JSON.parse(xhr.responseText);

    for (var i = 0; i < 3; i++) {
      getUser(APIData[i]);
    }
    preloaderElm.style.display = 'none';

  });

}

function getUser(usersList) {

  var uri = 'https://api.github.com/users/' + usersList.login;
  var divList = document.createElement('div');

  RequestAPI.get(uri, function (data, xhr) {

    var data = JSON.parse(xhr.responseText);

    usersList.email = data.email ? data.email : 'Не указан пользователем';
    usersList.name = data.name ? data.name : 'Не указан пользователем';

    var uri = 'templates/html/users-list.html';

    RequestAPI.get(uri, function (dataM, xhr) {
      var rendered = Mustache.render(dataM, {
        json: JSON.stringify(usersList),
        userUrl: usersList.html_url,
        userName: usersList.login,
        userImgUrl: usersList.avatar_url,
        userEmail: usersList.email
      });

      divList.innerHTML = rendered;
      document.getElementById('listusers').appendChild(divList);
    });
  });
}
