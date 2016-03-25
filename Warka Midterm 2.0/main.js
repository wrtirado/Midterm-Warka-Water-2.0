(function () {
  'use strict'
  angular.module('warkaApp', ['warkaAppControllers', 'ui.router'])
    .config(MainRouter)

  function MainRouter ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('landingpage', {url: '/', templateUrl: './landingpage.html',})

      .state('news', {url: '/news', templateUrl: './news.html',})

      .state('design', {url: '/design', templateUrl: './design.html',})

      .state('evolution',{url: '/evolution', templateUrl: './evolution.html'})

      .state('faq', {url: '/faq', templateUrl: './faq.html',})

      .state('team',{url: '/team', templateUrl: './team.html'})
      // $urlRouterProvider.otherwise('/')
  }
}())
