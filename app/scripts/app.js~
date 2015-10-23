'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
angular
  .module('angularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngCordova',
    'pascalprecht.translate',
    'angular-vibrator',
    'geolocation',
    'ngCordova',
    'nvd3',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider, $translateProvider, vibratorProvider) {

    $translateProvider.translations('de_DE', {
        APP_HEADLINE:  'MVV München',
        SUB_HEADLINE: '',
        HEADING1:  'Statistiken',
        PARA1: '',
        APP_TEXT:  'Irgendein Text über eine großartige AngularJS App.'
    });

    // englische Sprache
    $translateProvider.translations('en_US', {
        APP_HEADLINE:  'MVV Munich',
        SUB_HEADLINE: '',
        PARA2: 'English Translation',
        HEADING1:      'Statistics'
    });

    // Default Language
    $translateProvider.preferredLanguage('de_DE');
	$translateProvider.fallbackLanguage(['de_DE']);
    $translateProvider.useCookieStorage();

    var sequences = {
        default: 900,
        twice: [200, 100, 300],
        long: 2500
    };

    vibratorProvider.setSequences(sequences);
  });

