define(['ngAMD','angular-route'], function(ngAMD){
    var app = angular.module("webapp", ['ngRoute']);
    app.config(function ($routeProvider) {
    $routeProvider
    .when("/home", ngAMD.route({
        templateUrl: 'app/views/home.html'
    }))
    .otherwise({redirectTo: "/app/views/home.html"});
  });

  
  
  ngAMD.bootstrap(app);
  
  return app;

});