'use strict';

require('./vau-app-bootstrap');

var appModule = require('./vau-app.module.js');
appModule.config(require('./vau-app.config.js'));
appModule.run(require('./vau-app.run.js'));

appModule.controller('vauReport',require('./controllers/vau-report'));

appModule.constant('vauReportsConfiguration',require('./services/vau-reports-configuration.constant.js'));

appModule.directive('vauSideMenu',require('./directives/vau-side-menu'));


