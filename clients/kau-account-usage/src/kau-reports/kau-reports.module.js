'use strict';

require('../../../ka-infra/core/ka-vidiun-api');
require('angular-daterangepicker');
require('../../../ka-infra/core/ka-common-utils');
require('../../../ka-infra/ui/ka-ui-common');
require('../../../ka-infra/ui/ka-ui-charts');


module.exports = angular.module('vauReports',['vaVidiunAPI','vaCommonUtils','daterangepicker','vaUICommon','vaUICharts']);
