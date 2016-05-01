/// <reference path="_all.ts" />

module ContactManagerApp {
	angular.module('contactManagerApp', ['ngMaterial', 'ngMdIcons'])
		.service('UserService', UserService)
		.controller('MainController', MainController)
		.config(function($mdIconProvider, $mdThemingProvider) {
			$mdIconProvider
				.defaultIconSet('./assets/svg/avatars.svg', 128)
				// .icon("google_plus", "./assets/svg/google_plus.svg", 512)
				// .icon("hangouts", "./assets/svg/hangouts.svg", 512)
				// .icon("twitter", "./assets/svg/twitter.svg", 512)
				// .icon("phone", "./assets/svg/phone.svg", 512)
				.icon('menu', './assets/svg/menu.svg', 24);
			$mdThemingProvider.theme('default')
				.primaryPalette('blue')
				.accentPalette('red');
    });
}