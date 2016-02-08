function ProfileController() {
  document.title = routes.profile.title;
};

function profileRequest() {
  var xhr = new XMLHttpRequest();
  var preloaderElm = document.getElementById('page-preloader');

  preloaderElm.style.display = 'block';
  
  xhr.open('GET', 'https://api.github.com/users/mojombo');
  xhr.send();
  xhr.onreadystatechange = function () { // (3)
    if (xhr.readyState != 4) return;

    var data = JSON.parse(xhr.responseText);
    var divUser = document.createElement('div');

    if (data.email == null) {
      data.email = 'Не указан пользователем';
    }

    divUser.innerHTML = "<div class='user anim bslide'><span class='crimson'>Логин: </span><a href='" + data.html_url + "' target='_blank'>@" + data.login + "</a> <img id='userimg' src='" + data.avatar_url + "' width='80'> <br> <span class='crimson'>Email: </span>" + data.email + "</div><br>";
    document.getElementById('profile').appendChild(divUser);
    
    preloaderElm.style.display = 'none';
  }
}
