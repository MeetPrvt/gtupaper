const app = angular.module('myApp', []);
document.getElementsByTagName('body')[0].style.overflow = 'hidden';

app.controller('indexController', function ($http, $scope) {
  $scope.loader = true;
  $http
    .get(
      'https://script.google.com/macros/s/AKfycbx0TB-FnoTDpljwMsS9ovewgIvkd8QohhG7A49EomOVxIIy0_1xFBL6goFGIniab_O45A/exec'
    )
    .then(function (response) {
      $scope.showData = response.data;
      $scope.selectedSemData = null;
      $scope.loader = false;
      document.getElementsByTagName('body')[0].style.overflow = 'auto';
    });

  $scope.currentScreen = 'home';
  $scope.setScreen = function (name) {
    $scope.currentScreen = name;
  };
  $scope.setSem = function (number) {
    if (number === 1) {
      $scope.semNumber = '1 & 2';
    } else {
      $scope.semNumber = number;
    }
    if ($scope.showData) {
      $scope.filteredSem = $scope.showData.filter(function (item) {
        return item.sem === number;
      });
    }
  };
});

// ------------- Vanilla JS ---------------

let acc_status = 'closed';
function toggleAccor() {
  let acc_content = document.querySelector('.home_7');
  let acc_icon = document.querySelector('.home_6');

  if (acc_status == 'closed') {
    acc_content.style.display = 'block';
    acc_status = 'open';
    acc_icon.innerHTML = `Semesterwise <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="black" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>`;
  } else {
    acc_content.style.display = 'none';
    acc_status = 'closed';
    acc_icon.innerHTML = `Semesterwise
        <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="black"
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>`;
  }
}
