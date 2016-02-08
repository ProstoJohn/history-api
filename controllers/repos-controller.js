function reposController() {
  document.title = routes.repos.title;
};

function reposRequest() {
  var xhr = new XMLHttpRequest();
  var preloaderElm = document.getElementById('page-preloader');
  var divProfile = document.createElement('div');
  var reposList = '<ul>';

  preloaderElm.style.display = 'block';

  xhr.open('GET', 'https://api.github.com/users/mojombo/repos');
  xhr.send();
  xhr.onreadystatechange = function () { // (3)
    if (xhr.readyState != 4) return;

    var reposInfo = JSON.parse(xhr.responseText);

    for (var i = 0; i < reposInfo.length; i++) {
      reposList += '<li class="reposElement anim bslide">' + reposInfo[i].name + '</li>';
    }

    reposList += '</ul>';
    divProfile.innerHTML = reposList;
    document.getElementById('repos').appendChild(divProfile);

    preloaderElm.style.display = 'none';
  }
}
