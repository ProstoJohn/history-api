function ProfileController() {
  document.title = routes.profile.title;

  profileRequest();
}

function profileRequest() {
  var uri = 'https://api.github.com/users/mojombo';

  Preloader.show();

  RequestAPI.get(uri, function (data, xhr) {
    var divUser = document.createElement('div');

    if (data.email == null) {
      data.email = 'Не указан пользователем';
    }

    var uri = 'templates/html/profile.html';

    RequestAPI.get(uri, function (dataM, xhr) {

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
