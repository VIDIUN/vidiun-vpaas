'use strict';


var appModule = require('./va-ui-common.module.js');
appModule.run(require('./va-ui-common.run.js'));
appModule.config(require('./va-ui-common.config.js'));

appModule.directive('vaStatusNotification',require('./directives/va-status-notification'));
