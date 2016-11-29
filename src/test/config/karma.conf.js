module.exports = function (config) {
	'use strict';

	config.set({
        browserNoActivityTimeout: 20000,
		basePath: '../../',
		files: [
		    // Dependencies
			'../bower_components/angular/angular.js',
			'../bower_components/angular-route/angular-route.js',
			'../bower_components/angular-mocks/angular-mocks.js',

            // Register modules first
            'app/js/components/**/module.js',

            // Load all other source files except component.js files
            'app/js/components/**/!(component).js',

            // Load reference json files for testing

            // Load all component.js to register controllers, services, etc
            'app/js/components/**/component.js',

            // Common test helpers
            'test/unit/common/**/*.js',

            // Test specs
            'test/unit/**/*.js',
		],
		autoWatch: true,
		singleRun: false,
        frameworks: ['jasmine'],
		browsers: [
			'Chrome',
			'Firefox'
		],
        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
        ]
	});
};