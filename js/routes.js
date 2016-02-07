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