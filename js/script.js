var request = new XMLHttpRequest();
var routes = {
  'home': {
    url: '/',
    viewURL: 'templates/main.html',
    controller: HomeController,
    title: 'Главная'
  },
  'info': {
    url: '/info',
    viewURL: 'templates/information.html',
    controller: InfoController,
    title: 'Информация'
  },
  'profile': {
    url: '/profile',
    viewURL: 'templates/profile.html',
    controller: ProfileController,
    title: 'Профиль'
  }
};

window.onload = function() {
  var links = document.querySelectorAll('a');

  for (var i = 0, length = links.length; i < length; i++) {
    var link = links[i];

    link.addEventListener('click', handlerClickLink, true);
  }

  loadPage(window.location.pathname);
};

function getRoute(url) {
  var result = undefined;

  for (var routeName in routes) {
    var route = routes[routeName];

    if (route.url === url) {
      result = route;
      break;
    }

  }

  return result;
}

function loadPage(url) {
  var templateURl = 'templates/main.html';
  var route = getRoute(url);

  if (route) {
    templateURl = route.viewURL;
  }

  request.open('GET', templateURl, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      document.getElementById('content').innerHTML = request.responseText;
    }
  };

  request.send();
if (url !== location.pathname) {
  window.history.pushState(null, null, url);
}
  route.controller();
}

function handlerClickLink(e) {
  e.preventDefault();

  var href = this.getAttribute('href');
  loadPage(href)
}

window.addEventListener('popstate', function() {
  loadPage(location.pathname);
});