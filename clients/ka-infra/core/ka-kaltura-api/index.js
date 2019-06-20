'use strict';


var appModule = require('./va-vidiun-api.module');
appModule.run(require('./va-vidiun-api.run'));
appModule.config(require('./va-vidiun-api.config'));

appModule.provider('vaVidiunAPIFacade',require('./services/va-vidiun-api-facade.provider'));

appModule.service('vaRequestsHandlerUtils',require('./services/va-requests-handler-utils.service'));

appModule.config(require('./config/handlers/report-service/get-url-for-report-as-csv.config'));
appModule.config(require('./config/handlers/report-service/get-table.config'));
