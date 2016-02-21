function listController() {
  document.title = routes.list.title;
  usersList();
}

var preloaderElm = document.getElementById('page-preloader');

function usersList() {
  preloaderElm.style.display = 'block';
  
  var requestValue = prompt("Сколько пользователей вам необходимо получить?");
  var uri = 'https://api.github.com/users' + '?since=0'

  if (requestValue == 0 || requestValue > 30) {
    alert("Количество запросов не может быть равно 0 и быть больше 30");
    location.reload();
  }

  RequestAPI.get(uri, function (data, xhr) {
    if (xhr.status == 403) {
      alert('Лимит запросов GitHub исчерпан. Попробуйте позже...');
    } else if (xhr.status != 200) {
      alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
    }

    var APIData = JSON.parse(xhr.responseText);

    for (var i = 0; i < requestValue; i++) {
      getUser(APIData[i]);
    }
    preloaderElm.style.display = 'none';

  });

}

function getUser(usersList) {

  var uri = 'https://api.github.com/users/' + usersList.login;
  var divList = document.createElement('span');

  RequestAPI.get(uri, function (data, xhr) {
    var data = JSON.parse(xhr.responseText);

    usersList.email = data.email ? data.email : 'Не указан пользователем';
    usersList.name = data.name ? data.name : 'Не указан пользователем';

    divList.innerHTML = "<div class='user anim aslide' data-json='" + JSON.stringify(usersList) + "'>Логин: <a href='" + usersList.html_url + "' target='_blank'>@" + usersList.login + "</a> <img id='userimg' src='" + usersList.avatar_url + "' width='75'> <br> Email: " + usersList.email + "<hr /><a onclick='ProfileController(this)' class='button'>Подробнее о пользователе</a></div><br>";

    document.getElementById('listusers').appendChild(divList);
  });
}

//Доработать mustache.js

//    var rendered = Mustache.render(usersList, {
//      json: JSON.stringify(usersList),
//      userUrl: usersList.html_url,
//      userName: usersList.login,
//      userImgUrl: usersList.avatar_url,
//      userEmail: usersList.email
//    });
