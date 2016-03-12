function reposInfoController() {
  document.title = routes.reposinfo.title;
  repositoryInformation();
}

function repositoryInformation() {

  var hashUserName = getUrlVars()["userName"];
  var hashRepository = getUrlVars()["repository"];

  console.log(hashUserName + ' ' + hashRepository)

  if (hashUserName === '') {
    alert('Имя пользователя не получено, возвращаемся к списку пользователей...');
    window.location = "/list";
  } else {
    var uri = 'https://api.github.com/repos/' + hashUserName + '/' + hashRepository + '/commits';
  }
  //Preloader on

  RequestAPI.get(uri, function (data, xhr) {

    var divCommit = document.createElement('div');
    var templateCommit = '';

    for (var i = 0; i < data.length; i++) {
      templateCommit += '<hr><div><b>Коммит: </b>' + data[i].commit.message + '<br> <b>Пользователь оставивший коммит: ' + data[i].committer.login + '</b></div>';
    }

    divCommit.innerHTML = templateCommit;
    document.getElementById('reposInfoCommits').appendChild(divCommit);

    //Preloader off

  });
}
