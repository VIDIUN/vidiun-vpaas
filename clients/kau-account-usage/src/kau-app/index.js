'use strict';

require('./kau-app-bootstrap');

var appModule = require('./kau-app.module.js');
appModule.config(require('./kau-app.config.js'));
appModule.run(require('./kau-app.run.js'));

appModule.controller('vauReport',require('./controllers/kau-report'));

appModule.constant('vauReportsConfiguration',require('./services/kau-reports-configuration.constant.js'));

appModule.directive('vauSideMenu',require('./directives/kau-side-menu'));


