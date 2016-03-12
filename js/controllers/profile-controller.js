function ProfileController(userInfo) {
  document.title = routes.profile.title;

  profileRequest(userInfo);
}

function profileRequest(info) {
  var hashUserName = getUrlVars()["userName"];
  var uri = 'https://api.github.com/users/' + hashUserName;
    
  Preloader.show();

  RequestAPI.get(uri, function (data, xhr) {
    var uri = 'templates/mustache/profile.html';

    if (data.login == null) {
      alert('Имя пользователя указано не верно, возвращаемся к списку пользователей...')
      window.location = "/list";
    }

    if (data.email == null) {
      data.email = 'Не указан пользователем';
    }

    RequestAPI.get(uri, function (dataM, xhr) {
      var divUser = document.createElement('div');
      var rendered = Mustache.render(dataM, {
        avatar_url: data.avatar_url,
        email: data.email,
        login: data.login,
        fullName: data.name
      });

      divUser.innerHTML = rendered;
      document.getElementById('profile').appendChild(divUser);

      Preloader.hide();
    })
  })
}
