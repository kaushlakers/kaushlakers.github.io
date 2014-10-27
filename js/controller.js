var phonecatApp = angular.module('websiteApp', []);

phonecatApp.controller('ViewCtrl', function ($scope) {
  $scope.menu = [{text:"Home", url:"/Views/home.html"},
    {text:"About", url:"/Views/about.html"},
    {text:"Work Experience", url:"Views/work_ex.html"},
    {text:"Projects", url:"Views/projects.html"},
    {text:"Resume", url:"Views/resume.html"}
    //{text:"Contact", url:"Views/contact.html"}
    ];
  $scope.currentMenu = $scope.menu[0];
  $scope.backstretch = {flag:false,text:"You need a backstretch!"};
  $scope.setMenuItem = function(menu){
    $scope.currentMenu = menu;
  }
  $scope.setActiveClass = function(menu){
    return ($scope.currentMenu == menu)?"active":""
  }
  $scope.setBackstretch = function(){
    $scope.backstretch = {flag:true, text:"I warned you!"}
    $.backstretch("images/bg-compressed.jpg");
    $(".main-container").css("opacity",0.92);
    $(".main-container").css("-khtml-opacity",0.92);
    $(".main-container").css("-moz-opacity",0.92);
    //$("#bs").prop('disabled', true);

  };

})
