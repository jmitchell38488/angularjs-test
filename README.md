# AngularJS Research & Learning Project

## Overview

This application is a learning exercise for implementing AngularJS, TypeScript, Karma and Protractor
together in the same application. 

This application is based on the AngularJS Phone Catalog Tutorial 
Application, as well as the TodoMVC using AngularJS & TypeScript and the NABOne platform.

### Installing dependencies

The application relies upon various Node.js tools, such as [Bower][bower], [Karma][karma] and
[Protractor][protractor]. You can install these by running:

```
npm install
```

This will also run Bower, which will download the Angular files needed.

Most of the scripts described below will run this automatically but it doesn't do any harm to run
it whenever you like.

### Running the Application during Development

- Run `npm start`.
- Navigate your browser to [http://localhost:8000/](http://localhost:8000/) to see the application 
  running.

### Unit Testing

Karma was used for the unit tests and protractor for the end-to-end tests.

- Start Karma with `npm test`.
- A browser will start and connect to the Karma server. Chrome has been set to be the default 
browser, but if you like, you can modify the `karma.conf.js` file in `src/test/config/` and add 
Firefox or any other browser you wish to test with. 
- Karma will sit and watch the application and test JavaScript files and automatically re-run
tests when it detects changes.
- You can execute single suite tests with `npm run test-single-run` and Karma will test all files
and finish execution

### End-to-End Testing

[Protractor][protractor] has been used for end-to-end (e2e) testing. It requires a webserver that
serves the application. See the _Running the Application during Development_ section, above.

- Serve the application with: `npm start`
- In a separate terminal/command line window run the e2e tests: `npm run protractor`.
- Protractor will execute the e2e test scripts against the web application itself. The project is
  set up to run the tests on Chrome directly. If you want to run against other browsers, you must 
  modify the configuration at `src/test/e2e/protractor.conf.js`.

[angular-seed]: https://github.com/angular/angular-seed
[bower]: http://bower.io/
[git-home]: https://git-scm.com/
[git-setup]: https://help.github.com/articles/set-up-git
[google-phone-gallery]: http://web.archive.org/web/20131215082038/http://www.android.com/devices
[jasmine]: https://jasmine.github.io/
[jdk]: https://wikipedia.org/wiki/Java_Development_Kit
[jdk-download]: http://www.oracle.com/technetwork/java/javase/downloads
[karma]: https://karma-runner.github.io/
[node]: https://nodejs.org/
[protractor]: http://www.protractortest.org/
[selenium]: http://docs.seleniumhq.org/