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

    divUser.innerHTML = "<div class='user anim bslide'><span class='crimson'>Логин: </span><a href='" + data.html_url + "' target='_blank'>@" + data.login + "</a> <img id='userimg' src='" + data.avatar_url + "' width='80'> <br> <span class='crimson'>Email: </span>" + data.email + "</div><br>";
    document.getElementById('profile').appendChild(divUser);
    
    Preloader.hide();  
  });
  
}
