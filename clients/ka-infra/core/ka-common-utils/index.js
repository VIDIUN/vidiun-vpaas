'use strict';


var appModule = require('./ka-common-utils.module');
appModule.run(require('./ka-common-utils.run'));
appModule.config(require('./ka-common-utils.config'));

appModule.service('vaAppRoutingUtils',require('./services/ka-app-routing.service'));
appModule.service('vFormatterUtils',require('./services/ka-formatter-utils.service'));


