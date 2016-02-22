function ProfileController(userInfo) {
  document.title = routes.profile.title;

  profileRequest(userInfo);
}

function profileRequest(info) {
  var hash = location.hash.substring(1);

  if (hash === '') {
    alert('Имя пользователя не получено, возвращаемся к списку пользователей...')
    window.location = "/list";
  } else {
    var uri = 'https://api.github.com/users/' + hash;
  }

  Preloader.show();

  RequestAPI.get(uri, function (data, xhr) {
    var uri = 'templates/html/profile.html';

    if (data.email == null) {
      data.email = 'Не указан пользователем';
    }

    RequestAPI.get(uri, function (dataM, xhr) {
      var divUser = document.createElement('div');
      var rendered = Mustache.render(dataM, {
        html_url: data.html_url,
        avatar_url: data.avatar_url,
        email: data.email,
        login: data.login
      });

      divUser.innerHTML = rendered;
      document.getElementById('profile').appendChild(divUser);

      Preloader.hide();
    })
  })
}
