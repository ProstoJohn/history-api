function reposController() {
  document.title = routes.repos.title;
  reposRequest();
}

function reposRequest() {
    var hashUserName = getUrlVars()["userName"];
    var uri = 'https://api.github.com/users/' + hashUserName + '/repos';

  var divProfile = document.createElement('div');
  var reposList = '<div>';

  Preloader.show();

  RequestAPI.get(uri, function (data, xhr) {

    for (var i = 0; i < data.length; i++) {
      reposList += '<a href="/reposinfo?userName='+ hashUserName + '&repository=' + data[i].name + '" id="reposList" class="buttonRep">' + data[i].name + '</a><br><br>';
    }

    reposList += '</div>';
    divProfile.innerHTML = reposList;
    document.getElementById('repos').appendChild(divProfile);

    Preloader.hide();
  });
}
