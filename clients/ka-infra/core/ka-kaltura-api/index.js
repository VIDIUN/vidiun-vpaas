'use strict';


var appModule = require('./ka-vidiun-api.module');
appModule.run(require('./ka-vidiun-api.run'));
appModule.config(require('./ka-vidiun-api.config'));

appModule.provider('vaVidiunAPIFacade',require('./services/ka-vidiun-api-facade.provider'));

appModule.service('vaRequestsHandlerUtils',require('./services/ka-requests-handler-utils.service'));

appModule.config(require('./config/handlers/report-service/get-url-for-report-as-csv.config'));
appModule.config(require('./config/handlers/report-service/get-table.config'));
