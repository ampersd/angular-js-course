angular.module('myApp', []);

angular.module('myApp').directive('userCard', function() {
    return {
      restrict: 'E',
      templateUrl: 'user-card.html'
    }; 
})

angular.module('myApp').controller('MainController', function(){
     this.users = [
      {
        fullName: 'Иванов Иван',
        avatarUrl: 'https://randomuser.me/api/portraits/thumb/men/57.jpg',
        birthdate: '1976-10-10',
        gender: 'мужской',
        address: 'ул. Звенигороская, 47б',
        email: 'ivanov@mail.ru'
      },
      {
        fullName: 'Петров Петр',
        avatarUrl: 'https://randomuser.me/api/portraits/thumb/men/7.jpg',
        birthdate: '1957-01-14',
        gender: 'мужской',
        address: 'ул.Пушкиская, 13',
        email: 'ivanov@mail.ru'
      },
      {
        fullName: 'Натальина Наталья',
        avatarUrl: 'https://randomuser.me/api/portraits/thumb/women/7.jpg',
        birthdate: '1990-07-03',
        gender: 'женский',
        address: 'ул. Лермонтова, 59',
        email: 'ivanov@mail.ru'
      }
    ];
});

angular.module('myApp').directive('avatar', function() {
    return {
      restrict: 'E',
      templateUrl: 'avatar.html'
    };
})
  
// НЕ РАБОТАЕТ ДОЛЖНЫМ ОБРАЗОМ  
angular.module('myApp').directive('mailto', function() {
    return {
      restrict: 'E',
      templateUrl: 'mail.html'
    }
});