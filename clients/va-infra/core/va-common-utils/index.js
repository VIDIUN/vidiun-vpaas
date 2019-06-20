'use strict';


var appModule = require('./va-common-utils.module');
appModule.run(require('./va-common-utils.run'));
appModule.config(require('./va-common-utils.config'));

appModule.service('vaAppRoutingUtils',require('./services/va-app-routing.service'));
appModule.service('vFormatterUtils',require('./services/va-formatter-utils.service'));


