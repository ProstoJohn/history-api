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
  },
  'repos': {
    url: '/repos',
    viewURL: 'templates/repos.html',
    controller: reposController,
    title: 'Репозитории'
  },
  'list': {
    url: '/list',
    viewURL: 'templates/list.html',
    controller: listController,
    title: 'Список пользователей'
  }
};
