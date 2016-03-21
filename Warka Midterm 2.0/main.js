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

      .state('media', {url: '/media', templateUrl: './media.html',})

      .state('faq', {url: '/faq', templateUrl: './faq.html',})

      .state('team',{url: '/team', templateUrl: './team.html'})

      .state('donate', {url: '/donate', templateUrl: './donate.html',})
      $urlRouterProvider.otherwise('/')
  }
}())
