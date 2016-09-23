angular.module('myApp', []);

angular.module('myApp').directive('userCard', function() {
    return {
      restrict: 'E',
      templateUrl: 'user-card.html'
    }; 
})

angular.module('myApp').controller('MainController', function(){

    this.user = {
      fullName: 'Иванов Иван',
      avatarUrl: 'https://randomuser.me/api/portraits/thumb/men/57.jpg',
      birthdate: '1976-10-10',
      gender: 'мужской',
      address: 'ул. Звенигороская, 47б',
      email: 'ivanov@mail.ru'
    };
});